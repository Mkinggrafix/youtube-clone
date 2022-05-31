const darkMode = document.querySelector('.dark');

darkMode.addEventListener('click', dark);

function dark(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        darkMode.classList.add('fa-sun');
    } else {
        darkMode.classList.remove('fa-sun');
    }
}

const menuBtn = document.querySelector('.side-menu');
const sideMenu = document.querySelector('.navbar');

menuBtn.addEventListener('click', navBar);

function navBar() {
    menuBtn.classList.toggle('fa-times');
    sideMenu.style.height = '25rem';
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    sideMenu.style.height = '0rem';
}

const openBtn = document.querySelector('.login');
const closeBtn = document.querySelector('.close-btn');
const loginPage = document.querySelector('.login-page');

openBtn.addEventListener('click', openPage);
closeBtn.addEventListener('click', closePage);

function openPage() {
    loginPage.style.display = 'block';
}

function closePage() {
    loginPage.style.display = 'none';
}

const myForm = document.forms['myForm'];
const userName = document.forms["myForm"][0];
const passWord = document.forms["myForm"][1];
const formBtn = document.forms["myForm"][2];
const formMessage = document.querySelector('.form-message')

myForm.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    if (userName.value.length < 8 || passWord.value.length < 6) {
        formMessage.classList.add('msg')
        formMessage.textContent = 'Entries are too short';

        setTimeout(() => formMessage.remove(), 2500);
    }
}