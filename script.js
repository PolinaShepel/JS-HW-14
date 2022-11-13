const theme = document.getElementById('theme');
const button = document.getElementById('switch-theme-button');

document.getElementById('switch-theme-button').addEventListener('click', function() {

    if (!document.querySelector(".theme").classList.contains("DARK-theme")) {
        theme.classList.add("DARK-theme");
        theme.classList.remove("LIGHT-theme");

    } else {
        theme.classList.remove("DARK-theme");
        theme.classList.add("LIGHT-theme");
    }

    button.innerHTML == 'Змінити тему' ? button.innerHTML = 'Повернути тему' : button.innerHTML = 'Змінити тему';
});