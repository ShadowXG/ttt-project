const playerTurn = document.querySelector('#player-turn')
const winStrategy = document.querySelector('#win-strategy')
const resetButton = document.querySelector('#reset-button')
const tttBoard = document.querySelector('#ttt-board')

const playerOne = 'X'
const playerTwo = 'O'
let currentPlayer = playerOne
var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

const makeBoard = () => {
    while (tttBoard.firstChild) {
        tttBoard.removeChild(tttBoard.firstChild)
    }

    for (let i = 1; i <= 9; i++) {
        const playArea = document.createElement('div')
        playArea.classList.add('playArea')
        tttBoard.appendChild(playArea)
        playArea.addEventListener('click', playAreaClicked)
        console.log(playArea.classList)
    }
}

const playAreaClicked = (event) => {
    const areaStyle = event.target.innerText
    if (!areaStyle) {
        event.target.innerText = currentPlayer
        if (checkForWinner()) {
            playerTurn.innerText = `${currentPlayer} has won!`;
            // restart();
            return;
        }
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
    }
}

const checkForWinner = () => {
    // checking station
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== '') {
          showResult(board[i][0]); // checks for rows
          return;
        }else if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== '') {
          showResult(board[0][i]); // checks for columns
          return;
        }
    }
}

function changeButton() {
    resetButton.textContent = 'Restart Game!'
}

resetButton.addEventListener('click', () => {
    changeButton()
    makeBoard()
})

// document.addEventListener('DOMContentLoaded', () => {
//     playAreaClicked()
// })