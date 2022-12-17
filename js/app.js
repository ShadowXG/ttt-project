const resetButton = document.querySelector('#reset-button')
const playerTurn = document.querySelector('player-turn')
const tttBoard = document.querySelector('#ttt-board')

const spaces = []
const playerOne = 'X'
const playerTwo = 'O'
let currentPlayer = playerOne

const makeBoard = () => {
    for (let i = 1; i <= 9; i++) {
        const area = document.createElement('div')
        area.classList.add('area')
        tttBoard.appendChild(area)
        area.addEventListener('click', areaClicked)
    }
}

const areaClicked = (event) => {
    console.log(`testing`)
    const areaID = event.target.id
    console.log(event)
    if (!spaces[areaID]) {
        console.log(spaces[areaID])
        spaces[areaID] = currentPlayer
        event.target.innerText = currentPlayer
    }
}

function handleClick() {
    resetButton.textContent = 'Restart Game!'
}

resetButton.addEventListener('click', handleClick)

document.addEventListener('DOMContentLoaded', () => {
    makeBoard()
})