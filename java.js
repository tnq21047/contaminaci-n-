document.querySelector('.dropdown').addEventListener('click', function(e) {
    e.preventDefault();
    let submenu = this.querySelector('.dropdown-content');
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
});
