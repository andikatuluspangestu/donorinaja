window.onscroll = () => {
  const navbar = document.querySelector('.navbar');

  window.pageYOffset > 50
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');

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