const darkMode = document.querySelector('.dark')

darkMode.addEventListener('click', dark)

function dark(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        darkMode.classList.add('fa-sun');
    } else {
        darkMode.classList.remove('fa-sun');
    }
}

