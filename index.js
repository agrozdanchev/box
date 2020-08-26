const tickets = [
  'My code does not have bugs it just delivers random features.',
  'Programmers don’t byte, they nibble a bit.',
  'Weeks of programming can save you hours of planning.', 
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
