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
  
  var form = event.target;
  var formData = new FormData(form);
  
  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          var successModal = new bootstrap.Modal(document.getElementById('successModal'));
          successModal.show();
          form.reset();
      } else {
          alert('There was an error submitting the form. Please try again.');
      }
  }).catch(error => {
      alert('There was an error submitting the form. Please try again.');
  });
});