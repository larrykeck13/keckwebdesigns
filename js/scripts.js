// scripts.js - You can add your custom JavaScript here
// Example: Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate form submission success
    setTimeout(function() {
      var successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
      scrollToTop(); // Scroll to top after form submission
    }, 500);
  });