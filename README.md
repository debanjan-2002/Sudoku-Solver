
# Sudoku Solver

**Sudoku Solver** is an algorithmic project based on **Backtracking Algorithm**. 
This projects shows a **visual representation** of the working of backtracking algorithm which is used to solve a Sudoku Puzzle.
## Live Link of Project

[Sudoku Solver](https://debanjan-2002.github.io/Sudoku-Solver/)


## Features

- It uses **Backtracking Algorithm** to solve a particular Sudoku State.
- User can give a Sudoku State as an **input**.
- An **unsolvable state** (wrong sudoku state input) is recognized by the algorithm. 
- *Clean*, *minimalistic* and ***responsive*** UI for seamless user experience.
- **Time Complexity** - 9 ^ $(n * n)$, where n is the number of sides of the sudoku board (which is 9 in case of a standard sudoku board).
## Working

### 1) How to set the Sudoku State
- When the website is loaded, the user can set the **board state**.
- First, click on the number from the **number pad** which you want to place in the board. This will select that particular number.
- Then select the cell on the board in which you want to place the selected number. This will put that number at that particular cell. (The selected number will be kept selected even after selecting a cell in the board).
- If the user wants to **change** the selected number, then all you have to do is select the new number from the number pad.
- Number on any cell on the board can be **overwritten** by other numbers by the user, in case a wrong number is placed at that cell.
- There is a **clear button ("C")** which helps to clear any cell which has a number in it. (In case the user put a number in a cell by mistake, which was supposed to be empty).

### 2) Starting the solving session
- Once the user has set the Sudoku state, he has to click the start button for the algorithm to start working.
- If the given Sudoku state has some **ambiguity** (that is, it is not solvable), then it will throw a message that the state is **not valid**. In that case the user needs to find the mistake and correct it.
- If the given Sudoku state is valid, then the algorithm will start doing it's job by running the backtracking algorithm. (It may take time depending upon the complexity of the board).
- Once the board is solved, the algorithm will be completed and a **solved message** will be shown.

### 3) Resetting
- At any given point of time, the user can reset the board by clicking the **Reset** button.


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

