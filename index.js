const button = document.querySelector('button');
const share = document.querySelector('.share-div');
const triangle = document.querySelector('.triangle');

button.addEventListener('click', function() {
    share.classList.toggle('active');
    triangle.classList.toggle('block');
})