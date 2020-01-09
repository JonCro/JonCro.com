const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', function() {
  if (this.pageYOffset > 70) {
    navbar.style.backgroundColor = 'rgba(19,20,24,.5)'
  } else {
    navbar.style.backgroundColor = 'transparent'
  }
})