// JavaScript to apply fade-in animation to home section
window.onload = function() {
  var homeSection = document.getElementById('home');
  homeSection.style.display = 'block';
  homeSection.style.opacity = 0;

  var fadeInEffect = setInterval(function() {
      if (homeSection.style.opacity < 1) {
          homeSection.style.opacity = parseFloat(homeSection.style.opacity) + 0.1;
      } else {
          clearInterval(fadeInEffect);
      }
  }, 100);
};