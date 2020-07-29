function navToggler() {
    document.querySelector('.nav-menu').classList.toggle('nav-active');
    document.querySelector('#icon-ham').classList.toggle('fa-times');
    document.querySelector('#icon-ham').classList.toggle('fa-bars');
}

function app() {
    document.querySelector('.ham-btn').addEventListener('click', navToggler);
}

app();