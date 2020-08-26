const tickets = [
  'Weeks of programming can save you hours of planning.',
  'Roses are red, violets are blue. Unexpected ‘{‘ on line 32.',
  'Code is like humor. When you have to explain it, it’s bad.',
  'My code does not have bugs it just delivers random features.',
  'Will code for pizza.',
  'You are CSS to my HTML.',
  'You put the pro in programmer.',
  'Programmers don’t byte, they nibble a bit.',
  'If at first you do not succeed just call it version 1.0.',
  'I know HTML (How to meet ladies).',
  'I am not lazy just buffering.',
  'If restarting can’t fix it we are in trouble.',
  'In case of fire - git commit, git push, git out.',
  'I went outside one time. The graphics weren’t that great.',
  'Launch first. Deny later.',
  'Programming is like sex. One mistake and you have to support it for the rest of your life.',
  'Declare variables, not war.',
  'That’s not a bug it’s a feature.',
  'Things are not always #000000 or #FFFFFF.',
  'You had me at “Hello world”.',
  'Web designers do it with <style>.',
  'Binary is as easy as 01, 10, 11.',
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
