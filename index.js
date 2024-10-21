const button = document.querySelector('button');
const share = document.querySelector('.share-div');
const triangle = document.querySelector('.triangle');
const svg = document.querySelector(svg);

button.addEventListener('click', function() {
    share.classList.toggle('active');
    triangle.classList.toggle('block');
    // button.classList.toggle('clicked');
    // svg.classList.toggle('fill');
})