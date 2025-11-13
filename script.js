// Smooth scrolling to contact section
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Show success toast
  showToast('Message Sent!', "We'll contact you soon with our offer details.");
  
  // Reset form
  this.reset();
});

// Toast notification function
function showToast(title, message) {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  
  toast.classList.add('show');
  
  // Hide toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Parallax effect for hero section (optional enhancement)
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-background');
  
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Intersection Observer for animations (optional enhancement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.supplier-card, .contact-card, .section-header');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});