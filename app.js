const container = document.querySelector('#container');
let squares = [];

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    container.appendChild(square);
    squares.push(square);
}

squares.forEach(square => {
    square.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'blue';
    })
})
