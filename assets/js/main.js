window.onscroll = function () {
  var navbar = document.querySelector('.navbar');
  if (window.pageYOffset > 50) { // Threshold of 50px scroll
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};
