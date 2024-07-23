document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');
    const label = document.getElementById('themeLabel');

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            label.textContent = 'Night Mode';
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            label.textContent = 'Light Mode';
        }
    });
});
