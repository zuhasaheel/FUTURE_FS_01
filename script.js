// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== Auto-update footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Contact form (frontend-only demo) =====
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.elements['name'].value;
  formNote.textContent = `Thanks, ${name}! Your message has been noted. (Demo form — connect a backend or Formspree to make this live.)`;
  contactForm.reset();
});