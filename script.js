const boardContainer = document.querySelector('#board-container');
const optionsContainer = document.querySelector('#options-container');
const button = document.querySelector('button');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

const exampleBoard = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

const speed = 100;
const delay = async () => {
    await new Promise((done) => setTimeout(() => done(), speed));
}


function buildBoard() {
    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            const block = document.createElement('div');
            block.classList.add('block');
            block.id = `${r}-${c}`;
            
            if(r == 2 || r == 5) {
                block.classList.add('border-bottom');
            }
            if(c == 3 || c == 6) {
                block.classList.add('border-left');
            }
            if(exampleBoard[r][c] !== ".") {
                block.innerText = exampleBoard[r][c];
                block.classList.add('initial-block-color');
            }
            boardContainer.append(block);
        }
    }
    
    for(let i = 0; i <= 9; i++) {
        const num = document.createElement("div");
        num.classList.add('block');
        num.classList.add('options');
        num.innerText = i;
        optionsContainer.append(num);
    }
}


const valid = async (row, col, c) => {
    for(let i = 0; i < 9; i++) {
        if(parseInt(exampleBoard[i][col]) === c) return false;
        if(parseInt(exampleBoard[row][i]) === c) return false;
        let rw = (3 * Math.floor(row / 3)) + Math.floor(i / 3);
        let cl = (3 * Math.floor(col / 3)) + Math.floor(i % 3);
        if(parseInt(exampleBoard[rw][cl]) === c) return false;
    }
    return true;
}

const solve = async () => {
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(exampleBoard[i][j] === ".") {
                for(let c = 1; c <= 9; c++) {
                    if(await valid(i, j, c)) {
                        await delay();
                        exampleBoard[i][j] = c.toString();
                        document.getElementById(`${i}-${j}`).innerText = c;
                        
                        if(await solve()) return true;
                        
                        await delay();
                        exampleBoard[i][j] = ".";
                        document.getElementById(`${i}-${j}`).innerText = "";
                    }
                }
                return false;
            }
        }
    }
    return true;
}
const start = async () => {
    const result = await solve();
    console.log(result);
}
const stop = () => {
    window.location.reload();
}

buildBoard();
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
// const options = document.querySelectorAll("options");
// console.log(options);
