// Navigation mobile
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'white';
    navLinks.style.padding = '1rem 1.5rem';
    navLinks.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
  } else {
    navbar.style.boxShadow = '0 1px 0 rgba(0,0,0,0.08)';
  }
});

// Formulaire de contact
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const success = document.getElementById('form-success');
  btn.textContent = 'Envoi en cours...';
  btn.disabled = true;
  setTimeout(() => {
    btn.style.display = 'none';
    success.style.display = 'block';
    e.target.reset();
  }, 1200);
}

// Animation d'apparition au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .stat-item, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
