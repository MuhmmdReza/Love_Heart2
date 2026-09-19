const field = document.querySelector('.sparkle-field');
const count = 180;

for (let i = 0; i < count; i++) {
  const s = document.createElement('span');
  s.className = 'spark';
  if (Math.random() < 0.13) s.classList.add('red');
  if (Math.random() < 0.05) s.classList.add('green');

  const size = Math.random() * 3.2 + 1;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = (Math.random() * 3 + 1.5).toFixed(2) + 's';
  const delay = (-Math.random() * 4).toFixed(2) + 's';

  s.style.width = size + 'px';
  s.style.height = size + 'px';
  s.style.left = x + '%';
  s.style.top = y + '%';
  s.style.setProperty('--d', duration);
  s.style.animationDelay = delay;
  field.appendChild(s);
}

// More particles along the lower curved "swirl".
for (let i = 0; i < 130; i++) {
  const s = document.createElement('span');
  s.className = 'spark';
  const t = Math.random();
  const side = Math.random() < .5 ? -1 : 1;
  const x = 50 + side * (18 + t * 47);
  const y = 72 + Math.sin(t * Math.PI) * -18 + (Math.random() - .5) * 12;

  s.style.width = (Math.random()*3+1) + 'px';
  s.style.height = s.style.width;
  s.style.left = Math.max(1, Math.min(99, x)) + '%';
  s.style.top = Math.max(45, Math.min(99, y)) + '%';
  s.style.setProperty('--d', (Math.random()*2+1.5).toFixed(2)+'s');
  s.style.animationDelay = (-Math.random()*3)+'s';
  field.appendChild(s);
}
