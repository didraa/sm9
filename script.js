
let backgroundColor = '';

document.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
    backgroundColor = 'red';
    } else if (event.key === 'g' || event.key === 'G') {
    backgroundColor = 'green';
    } else if (event.key === 'b' || event.key === 'B') {
    backgroundColor = 'blue';
    }
    document.body.style.backgroundColor = backgroundColor;
});

document.addEventListener('keyup', () => {
    backgroundColor = '';
    document.body.style.backgroundColor = backgroundColor;
});

