const toggleBtn = document.getElementById('theme-toggle-btn');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

document.addEventListener("DOMContentLoaded", () => {
    let currentTheme = getInitialTheme();
    applyTheme(currentTheme);

    toggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
    });

})

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
        toggleIcon.textContent = '🌙';
        toggleText.textContent = 'Dark Mode';
    } else {
        toggleIcon.textContent = '☀️';
        toggleText.textContent = 'Light Mode';
    }
};