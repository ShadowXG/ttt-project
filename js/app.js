const Turn = document.querySelector('#player-turn')
const winStrategy = document.querySelector('#win-strategy')
const resetButton = document.querySelector('#reset-button')
const tttBoard = document.querySelector('#ttt-board')

let array = []
const playerOne = 'X'
const playerTwo = 'O'
let currentPlayer = playerOne
console.log(currentPlayer)

const playerTurn = () => {
    console.log(currentPlayer)
    Turn.innerText = `It's your turn! Player: ${currentPlayer}`
}
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
    }
}

const playAreaClicked = (event) => {
    const arrayId = event.target.id
    if (!array[arrayId]) {
        array[arrayId] = currentPlayer
        console.log(array[arrayId])
        event.target.innerText = currentPlayer
        if (checkForWinner()) {
            Turn.innerText = `${currentPlayer} has won!`;
            resetBoard()
            return;
        }
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
        playerTurn()
    }
}

const checkForWinner = () => {
    if (array[1] === currentPlayer) {
        if (array[2] === currentPlayer && array[3] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins up to top`;
          return true;
        }else if (array[4] === currentPlayer && array[7] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins on the left`;
          return true;
        }else if (array[5] === currentPlayer && array[9] === currentPlayer) {
            winStrategy.innerText = `${currentPlayer} wins diagonally`;
            return true;
        }
      }else if (array[9] === currentPlayer) {
        if (array[3] === currentPlayer && array[6] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins on the right`;
          return true;
        }else if (array[7] === currentPlayer && array[8] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins on the bottom`;
          return true;
        }
      }else if (array[5] === currentPlayer) {
        if (array[2] === currentPlayer && array[8] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins vertically on middle`;
          return true;
        }else if (array[3] === currentPlayer && array[6] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins horizontally on the middle`;
          return true;
        }else if (array[3] === currentPlayer && array[7] === currentPlayer) {
          winStrategy.innerText = `${currentPlayer} wins diagonally`;
          return true;
        }
    }
}

const resetBoard = (event) => {
    console.log(`resetBoard has triggered`)
    // array.forEach((array, i) => {
    for (let i = 1; i <= 9; i++) {
        console.log(`Still something in there`)
        array.pop()
    }
    console.log(array)
    setTimeout(() => {
        winStrategy.innerText = ''
        playerTurn()
    }, 3000)
    makeBoard()
}

const changeButton = () => {
    resetButton.textContent = 'New Game!'
}

resetButton.addEventListener('click', () => {
    changeButton()
    resetBoard()
})

document.addEventListener('DOMContentLoaded', () => {
    playerTurn()
})