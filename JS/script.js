const alertBox = document.querySelector('.alert-box');
const boardContainer = document.querySelector('#board-container');
const optionsContainer = document.querySelector('#options-container');
const button = document.querySelector('button');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
let selectedOption = null;

const sudokuBoard = [
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."]
];

const speed = 100;
const delay = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), speed);
    });
}

function selectOption() {
    if(selectedOption) {
        selectedOption.classList.remove('selected-color');
    }
    selectedOption = this;
    selectedOption.classList.add("selected-color");
}

function selectBlock(block, row, col) {
    if(selectedOption) {
        if(selectedOption.innerText === "C") {
            if(block.innerText === "") {
                return;
            }
            block.innerText = "";
            block.classList.remove("selected-color");
            sudokuBoard[row][col] = ".";
        }
        else {
            block.innerText = selectedOption.innerText;
            block.classList.add("selected-color");
            sudokuBoard[row][col] = block.innerText;
        }
    }
}

function buildBoard() {
    for(let i = 0; i <= 9; i++) {
        const num = document.createElement("div");
        num.classList.add('options', 'flex', 'justify-center', 'align-center', 'font-wt-bold', 'br-radius');
        if(i == 0) {
            num.innerText = "C";
        }
        else {
            num.innerText = i;
        }
        num.addEventListener('click', selectOption);
        optionsContainer.append(num);
    }

    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            const block = document.createElement('div');
            block.classList.add('block', 'flex', 'justify-center', 'align-center', 'font-wt-bold');
            block.id = `${r}-${c}`;
            
            if(r == 2 || r == 5) {
                block.classList.add('border-bottom');
            }
            if(c == 3 || c == 6) {
                block.classList.add('border-left');
            }
            block.addEventListener('click', () => {
                selectBlock(block, r, c);
            });
            boardContainer.append(block);
        }
    }
}

const valid = async (row, col, c) => {
    for(let i = 0; i < 9; i++) {
        if(parseInt(sudokuBoard[i][col]) === c) return false;
        if(parseInt(sudokuBoard[row][i]) === c) return false;
        let rw = (3 * Math.floor(row / 3)) + Math.floor(i / 3);
        let cl = (3 * Math.floor(col / 3)) + Math.floor(i % 3);
        if(parseInt(sudokuBoard[rw][cl]) === c) return false;
    }
    return true;
}

const start = async () => {
    const isPossible = validBoard(sudokuBoard);
    if(isPossible) {
        alertBox.classList.add('display-none');
        optionsContainer.classList.add('display-none');
        
        const result = await solve();

        alertBox.classList.remove('display-none', 'alert-failure');
        alertBox.classList.add('alert-success');
        alertBox.innerText = "Solved";
    }
    else {
        alertBox.classList.remove('display-none', 'alert-success');
        alertBox.classList.add('alert-failure');
        alertBox.innerText = "Unsolvable";
    }
}

const stop = () => {
    window.location.reload();
}

const solve = async () => {
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(sudokuBoard[i][j] === ".") {
                for(let c = 1; c <= 9; c++) {
                    if(await valid(i, j, c)) {
                        await delay();
                        sudokuBoard[i][j] = c.toString();
                        document.getElementById(`${i}-${j}`).innerText = c;
                        
                        const res = await solve();
                        if(res) return true;
                        
                        await delay();
                        sudokuBoard[i][j] = ".";
                        document.getElementById(`${i}-${j}`).innerText = "";
                    }
                }
                return false;
            }
        }
    }
    return true;
}

buildBoard();
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);