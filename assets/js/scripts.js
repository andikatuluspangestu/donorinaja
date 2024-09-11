window.onscroll = () => {
  const header = document.querySelector('.header');

  window.pageYOffset > 50
    ? header.classList.add('sticky')
    : header.classList.remove('sticky');

};

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

// Konfigurasi agar ketika gulir scrollbar halaman ke bawah, akan terasa halus dan tidak terlalu cepat
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Konfigurasi Show/Hidden Password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {

  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  if (type === 'password') {
    this.classList.remove('fa-eye');
    this.classList.add('fa-eye-slash');
  } else if (type === 'password') {
    this.classList.remove('fa-eye');
    this.classList.add('fa-eye-slash');
  } else {
    this.classList.remove('fa-eye-slash');
    this.classList.add('fa-eye');
  }
});

const toggleConfPassword = document.querySelector('#toggleConfPassword');
const confpassword = document.querySelector('#confpassword');

toggleConfPassword.addEventListener('click', function () {

  const type = confpassword.getAttribute('type') === 'password' ? 'text' : 'password';
  confpassword.setAttribute('type', type);

  if (type === 'password') {
    this.classList.remove('fa-eye');
    this.classList.add('fa-eye-slash');
  } else if (type === 'password') {
    this.classList.remove('fa-eye');
    this.classList.add('fa-eye-slash');
  } else {
    this.classList.remove('fa-eye-slash');
    this.classList.add('fa-eye');
  }
});

