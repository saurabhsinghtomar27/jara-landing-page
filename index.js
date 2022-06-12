const check = document.querySelector('#check');
const menushow = document.querySelector('#menubutton');
const wrong = document.querySelector(".wrong");
const humburger = document.querySelector('.humburger');
check.addEventListener('click', () => {
    menushow.classList.toggle('active');
    wrong.classList.toggle('hidden');
    humburger.classList.toggle('hidden');
})
wrong.addEventListener('click', () => {
    menushow.classList.toggle('active');
    humburger.classList.toggle('hidden');
    wrong.classList.toggle('hidden');
})