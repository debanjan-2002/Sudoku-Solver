function validRow(board, row) {
    let set = new Set();
    for(let i = 0; i < 9; i++) {
        if(board[row][i] !== ".") {
            const val = parseInt(board[row][i]);
            if(set.has(val)) {
                return false;
            }
            set.add(val);
        }
    }
    return true;
}

function validCol(board, col) {
    let set = new Set();
    for(let i = 0; i < 9; i++) {
        if(board[i][col] !== ".") {
            const val = parseInt(board[i][col]);
            if(set.has(val)) {
                return false;
            }
            set.add(val);
        }
    }
    return true;
}

function validSubSquares(board) {
    for(let row = 0; row < 9; row = row + 3) {
        for(let col = 0; col < 9; col = col + 3) {
            let set = new Set();
            for(let r = row; r < row + 3; r++) {
                for(let c = col; c < col + 3; c++) {
                    if(board[r][c] !== ".") {
                        const val = parseInt(board[r][c]);
                        if(set.has(val)) {
                            return false;
                        }
                        set.add(val);
                    }
                }
            }
        }
    }
    return true;
}

function validBoard(board) {
    for(let i = 0; i < 9; i++) {
        const res1 = validRow(board, i);
        const res2 = validCol(board, i);

        if(!res1 || !res2) {
            return false;
        }
    }
    const res3 = validSubSquares(board);

    if(!res3) return false;
    return true;
}