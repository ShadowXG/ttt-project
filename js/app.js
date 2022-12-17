const playerTurn = document.querySelector('#player-turn')
const winStrategy = document.querySelector('#win-strategy')
const resetButton = document.querySelector('#reset-button')
const tttBoard = document.querySelector('#ttt-board')

const spaces = ''
const playerOne = 'X'
const playerTwo = 'O'
let currentPlayer = playerOne

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
        if (playerWon()) {
            playerTurn.innerText = `${currentPlayer} has won!`;
            // restart();
            return;
        }
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
    }
}

const playerWon = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] && spaces[2] === currentPlayer) {
            winStrategy.innerText = `${currentPlayer} wins up top!`
            return true
        }else if (spaces[3] && spaces[6] === currentPlayer) {
            winStrategy.innerText = `${currentPlayer} wins on the left side!`
            return true
        }else if (spaces[4] && spaces[8] === currentPlayer) {
            winStrategy.innerText = `${currentPlayer} wins diagonally!`
            return true
        }
    }
    if (spaces[8] === currentPlayer) {
        if (spaces[2] && spaces[5] === currentPlayer) {
          strategy.innerText = `${currentPlayer} wins on the right side!`;
          return true;
        }else if (spaces[6] && spaces[7] === currentPlayer) {
          strategy.innerText = `${currentPlayer} wins on the bottom`;
          return true;
        }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] && spaces[7] === currentPlayer) {
          strategy.innerText = `${currentPlayer} wins vertically on middle`;
          return true;
        }else if (spaces[3] && spaces[5] === currentPlayer) {
          strategy.innerText = `${currentPlayer} wins horizontally on the middle`;
          return true;
        }else if (spaces[2] && spaces[6] === currentPlayer) {
          strategy.innerText = `${currentPlayer} wins diagonally`;
          return true;
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