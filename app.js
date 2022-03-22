const container = document.querySelector('#container');
const button = document.querySelector('button');
let squares = [];

function trail(e) {
    e.target.style.backgroundColor = 'blue';
}

function makeSquares(num, remove) {
    if (remove) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    for (let i = 0; i < num; i++) {
        const square = document.createElement('div');
        container.appendChild(square);
        squares.push(square);
    }
    squares.forEach(square => {
        square.addEventListener('mouseover', trail);
    })
}

makeSquares(256, false);

function newGrid() {
    squares = [];
    const numOfSides = window.prompt('How many squares per side for the new grid? (Please enter a number < 100) ');
    container.style.gridTemplateColumns = `repeat(${numOfSides}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numOfSides}, 1fr)`;
    makeSquares(numOfSides ** 2, true);
}

button.addEventListener('click', newGrid);
