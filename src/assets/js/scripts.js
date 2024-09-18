// Load all the scripts here
window.onscroll = () => {
  const header = document.querySelector('.header');

  window.pageYOffset > 50
    ? header.classList.add('sticky')
    : header.classList.remove('sticky');
};

// Inisialisasi AOS
AOS.init({
  duration: 1000,
  offset: 120,
  once: true,
  disable: () => window.innerWidth < 768,
  mirror: true,
  delay: 100,
  easing: 'ease-in-out',
  anchorPlacement: 'top-bottom',
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Show/Hide Password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
if (togglePassword && password) {
  togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
  });
}

// Show/Hide Confirm Password
const toggleConfPassword = document.querySelector('#toggleConfPassword');
const confpassword = document.querySelector('#confpassword');
if (toggleConfPassword && confpassword) {
  toggleConfPassword.addEventListener('click', function () {
    const type = confpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confpassword.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
  });
}

// Dropdown avatar click
document.addEventListener('DOMContentLoaded', function () {
  const avatar = document.getElementById('avatarDropdown');
  const dropdownMenu = avatar?.nextElementSibling; // Pastikan elemen ditemukan
  if (avatar && dropdownMenu) {
    avatar.addEventListener('click', function (e) {
      e.stopPropagation(); // Cegah penutupan dropdown langsung
      dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
      if (!avatar.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  }
});

// Cek apakah user sudah login
document.addEventListener('DOMContentLoaded', function () {

  const isLogin = localStorage.getItem('isLogin') === 'true';
  const avatarContainer = document.getElementById('avatarContainer');
  const authButtons = document.getElementById('authButtons');

  if (isLogin) {

    // Tampilkan avatar
    avatarContainer.classList.remove('d-none');

    // Sembunyikan tombol login dan daftar
    authButtons.classList.add('d-none');

  } else {

    // Sembunyikan avatar
    avatarContainer.classList.add('d-none');

    // Tampilkan tombol login dan daftar
    authButtons.classList.remove('d-none');

  }
});

// Logout
document.getElementById('logout')?.addEventListener('click', function () {
  localStorage.removeItem('isLogin');
  window.location.href = '/';
});