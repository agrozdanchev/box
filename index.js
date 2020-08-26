const tickets = [
  'Weeks of programming can save you hours of planning.',
  'Roses are red, violets are blue. Unexpected ‘{‘ on line 32.',
  'Code is like humor. When you have to explain it, it’s bad.',
];

function getLuck(event) {
  const button = document.querySelector('button');
  if (button.classList.contains('hide')) {
    return;
  }
  event.stopPropagation();
  const overlay = document.querySelector('div.overlay');
  overlay.classList.add('show');

  button.classList.add('hide');

  const luck = document.querySelector('p.luck');
  luck.innerHTML = tickets[Math.floor(Math.random() * tickets.length)];
  luck.classList.add('show');
  document.addEventListener('click', clearLuck);
}

function clearLuck() {
  const overlay = document.querySelector('div.overlay');
  overlay.classList.remove('show');

  const button = document.querySelector('button');
  button.classList.remove('hide');

  const luck = document.querySelector('p.luck');
  luck.classList.remove('show');
  document.removeEventListener('click', clearLuck);
}
