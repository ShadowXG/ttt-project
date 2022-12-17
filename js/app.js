const resetButton = document.querySelector('#reset-button')
const tttBoard = document.querySelector('#ttt-board')

const startGame = () => {
    console.log(`testing`)
}

const makeBoard = () => {
    for (let i = 1; i <= 9; i++) {
        const area = document.createElement('div')
        area.classList.add('area')
        tttBoard.appendChild(area)
    }
}

function handleClick() {
    resetButton.textContent = 'Restart Game!'
}

resetButton.addEventListener('click', () => {
    startGame()
    handleClick()
})

document.addEventListener('DOMContentLoaded', () => {
    makeBoard()
})