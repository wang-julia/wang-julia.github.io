// Clickable project cards
document.querySelectorAll('.project-card[data-github]').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', e => {
    if (!e.target.closest('a')) {
      window.open(card.dataset.github, '_blank', 'noopener');
    }
  });
});

// Navbar shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Scroll-reveal
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.timeline-item, .project-card, .stack-tag, .contact-link, .about-text, .about-avatar, .aboutme-text, .fact-card'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => sectionObserver.observe(s));
