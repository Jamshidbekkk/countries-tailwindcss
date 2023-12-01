var elModeBtn = document.querySelector(".mode-btn");
var elModeIcon = document.querySelector(".mode-icon");

elModeBtn.addEventListener("click", function() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'light';
        elModeIcon.src = "../img/moon-dark-icon.svg";
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'dark';
        elModeIcon.src = "../img/moon-light-icon.svg";
    }
    
    
})

localStorage.removeItem('theme')