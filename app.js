// Dropdown Functionality
const menuBtn = document.getElementById('menu-dropdown');
const showDropdown = document.getElementById('mobile-dropdown');

menuBtn.addEventListener('click', () => {
  showDropdown.classList.toggle('show-dropdown');
});
