const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 }) : null;

document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const sendWhatsApp = document.getElementById('sendWhatsApp');
if (sendWhatsApp) {
  sendWhatsApp.addEventListener('click', () => {
    const type = document.getElementById('projectType').value;
    const details = document.getElementById('projectMessage').value.trim();
    const message = [
      'Hello Muhammad Abdul Qadeer,',
      `I want to discuss a ${type} project.`,
      '',
      'Project details:',
      details || 'I would like to discuss the project requirements and price.',
      '',
      'Sent from AQ Developer Portfolio.'
    ].join('\n');
    window.open(`https://wa.me/923182737897?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}
