const playerTurn = document.querySelector('#player-turn')
const winStrategy = document.querySelector('#win-strategy')
const resetButton = document.querySelector('#reset-button')
const tttBoard = document.querySelector('#ttt-board')

const array = []
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
        playArea.id = `${i}`
        console.log(playArea.classList)
    }
}

const playAreaClicked = (event) => {
    const arrayId = event.target.id
    if (!array[arrayId]) {
        array[arrayId] = currentPlayer
        console.log(array[arrayId])
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
    if (array[1] === currentPlayer) {
        if (array[2] && array[3] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins up to top`;
          return true;
        }else if (array[4] && array[7] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins on the left`;
          return true;
        }
      }else if (array[9] === currentPlayer) {
        if (array[3] && array[6] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins on the right`;
          return true;
        }else if (array[7] && array[8] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins on the bottom`;
          return true;
        }
      }else if (array[5] === currentPlayer) {
        if (array[2] && array[8] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins vertically on middle`;
          return true;
        }else if (array[3] && array[6] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins horizontally on the middle`;
          return true;
        }else if (array[3] && array[7] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins diagonally`;
          return true;
        }else if (array[1] && array[9] === currentPlayer) {
            winStrategy.innerText = `${currentPlayer} wins diagonally`;
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