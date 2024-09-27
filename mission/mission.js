const themeSelect = document.getElementById('theme');
themeSelect.addEventListener('change', function() {
    const body = document.body;
    if (themeSelect.value === 'dark') {
        body.classList.add('dark');
    }
    else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
});