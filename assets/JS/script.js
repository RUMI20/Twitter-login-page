const closeBtn = document.querySelector('.close_icon');
const container = document.querySelector('.wrapper');
const openBtn = document.querySelector('.openBtn');


openBtn.addEventListener('click', () => {
    container.style.display='block';
    openBtn.style.display='none';
})

closeBtn.addEventListener('click', () => {
    container.style.display='none';
    openBtn.style.display='block';;
})