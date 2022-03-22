const container = document.querySelector('#container');
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.style.border = '1px solid black';
    // square.style.width = '20px';
    // square.style.height = '20px';
    container.appendChild(square);
}