const tttBoard = document.querySelector('#ttt-board')

const makeBoard = () => {
    for (let i = 1; i <= 9; i++) {
        const area = document.createElement('div')
        area.classList.add('area')
        tttBoard.appendChild(area)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    makeBoard()
})