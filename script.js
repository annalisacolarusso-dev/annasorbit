const launchBtn = document.getElementById('launch-btn');
const hero = document.getElementById('hero');
const spaceLane = document.getElementById('space-lane');
const levels = document.getElementById('levels');
const topNav = document.getElementById('top-nav');

const planets = document.querySelectorAll('.planet');
const navLinks = document.querySelectorAll('.nav-link');

launchBtn.addEventListener('click', () => {
  hero.classList.add('hidden');
  spaceLane.classList.remove('hidden');
  topNav.classList.remove('hidden');
});

function showLevel(id) {
  levels.classList.remove('hidden');

  document.querySelectorAll('.level').forEach(l => {
    l.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) target.style.display = 'block';
}

function warpTo(id) {
  document.body.classList.add('warp');

  setTimeout(() => {
    spaceLane.classList.add('hidden');
    showLevel(id);
    document.body.classList.remove('warp');
  }, 800);
}

planets.forEach(planet => {
  planet.addEventListener('click', (e) => {
    const target = e.currentTarget.querySelector('span')?.dataset.target;
    if (target) warpTo(target);
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.dataset.target;
    if (target === 'map') {
      levels.classList.add('hidden');
      spaceLane.classList.remove('hidden');
    } else {
      warpTo(target);
    }
  });
});
