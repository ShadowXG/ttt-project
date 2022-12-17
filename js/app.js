const resetButton = document.querySelector('#reset-button')
const playerTurn = document.querySelector('player-turn')
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
        playArea.addEventListener('click', areaClicked)
    }
}

const areaClicked = (event) => {
    console.log(`testing`)
    const areaID = event.target.id
    console.log(event)
    if (!spaces[areaID]) {
        spaces[areaID] = currentPlayer
        event.target.innerText = currentPlayer

        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
    }
}

function handleClick() {
    resetButton.textContent = 'Restart Game!'
}

resetButton.addEventListener('click', () => {
    handleClick()
    makeBoard()
})

// document.addEventListener('DOMContentLoaded', () => {
//     makeBoard()
// })