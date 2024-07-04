const threeDots = document.querySelector('.three-dots');
const container = document.querySelector('.container');
const cut = document.querySelector('.cut');

threeDots.addEventListener('click', () => {
    container.style.width = '30vw';
    threeDots.classList.toggle('hidden');
});

cut.addEventListener('click', () => {
    container.style.width = '0';
    threeDots.classList.remove('hidden');
});
        