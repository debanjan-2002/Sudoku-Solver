
# Sudoku Solver

**Sudoku Solver** is an algorithmic project based on **Backtracking Algorithm**. 
This projects shows a **visual representation** of the working of backtracking algorithm which is used to solve a Sudoku Puzzle.
## Live Link of project

[Sudoku Solver](https://link-url-here.org)


## Features

- It uses **Backtracking Algorithm** to solve a particular Sudoku State.
- User can give a Sudoku State as an **input**.
- An **unsolveable state** (wrong sudoku state input) is recognised by the algorithm. 
- *Clean*, *minimalistic* and ***responsive*** UI for seamless user experience.
- **Time Complexity** - 9 ^ $(n * n)$, where n is the number of sides of the sudoku board (which is 9 in case of a standard sudoku board).
## Tech Stack

**Client:** HTML, CSS & JavaScript



## Screenshots

![App Screenshot](https://raw.githubusercontent.com/debanjan-2002/Sudoku-Solver/master/Images/img1.PNG?token=GHSAT0AAAAAABUJ72CU4476FECYRKSM5LPGYY5AFMA)

![App Screenshot](https://raw.githubusercontent.com/debanjan-2002/Sudoku-Solver/master/Images/img2.PNG?token=GHSAT0AAAAAABUJ72CV3XQOETWMS7HQCR3SYY47ZAA)


## Backtracking Algorithm (Code Snippet)

```javascript
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
```


## Support

For support, email debanjan.edu.2002@gmail.com or connect me through LinkedIn.



## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/debanjan-poddar/)
[![Leetcode](https://img.shields.io/badge/Leetcode-fcfc03?style=for-the-badge&logo=leetcode&logoColor=red)](https://leetcode.com/debanjan2002/)

