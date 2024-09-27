const themeSelect = document.getElementById('theme');
const logo = document.getElementById('logo');

themeSelect.addEventListener('change', function() {
    const body = document.body;
    if (themeSelect.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'images/byui-logo_dark.png';
    }
    else {
        body.classList.remove('dark');
        logo.src = 'images/byui-logo_blue.webp';
    }
});