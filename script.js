// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

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
  formNote.textContent = `Thanks, ${name}! Your postcard has been received. (Demo form — connect a backend or Formspree to make this live.)`;
  contactForm.reset();
});

// ===== Scroll reveal animation =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ===== "Currently boarding" rotating ticker =====
const currentlyEl = document.getElementById('currentlyText');
const currentlyItems = [
  'coding my portfolio ☕',
  'rewatching a k-drama 🎬',
  'daydreaming about beaches 🏖️',
  'craving good food 🍜',
];

let currentlyIndex = 0;

function rotateCurrently() {
  currentlyEl.textContent = currentlyItems[currentlyIndex];
  currentlyIndex = (currentlyIndex + 1) % currentlyItems.length;
}

rotateCurrently();
setInterval(rotateCurrently, 3000);

// ===== Theme toggle: Cozy (brown, default) <-> Bright (cream) =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');
const root = document.documentElement;

function applyTheme(mode) {
  if (mode === 'dark') {
    root.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '🌅';
    themeLabel.textContent = 'Bright Mode';
  } else {
    root.removeAttribute('data-theme');
    themeIcon.textContent = '☕';
    themeLabel.textContent = 'Cozy Mode';
  }
}

let savedTheme = null;
try {
  savedTheme = localStorage.getItem('theme');
} catch (err) {
  // localStorage unavailable — just use the default
}

applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  const newMode = isDark ? 'light' : 'dark';
  applyTheme(newMode);

  try {
    localStorage.setItem('theme', newMode);
  } catch (err) {
    // localStorage unavailable — theme just won't persist on reload
  }
});