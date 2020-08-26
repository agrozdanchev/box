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
  'Web designers do it with style.',
  'Binary is as easy as 01, 10, 11.',
  'Sometimes I have no idea why my code is working.',
  'It’s not a bug. It’s an undocumented <feature>.',
  '!false - It’s funny because it’s true.',
  'Software Engineering - all the cool kids are doing it.',
  'You are the computer whisperer.',
  'This coworker is coding like a boss.',
  'Git pull a day keeps the conflicts away.',
  'It works on my machine.',
  'I’m a software engineer, not a magician.',
  'Let me THROUGH, I’m an ADMIN.',
  'Error… Smile not found.',
  'There is magic in the air and it’s called WiFi.',
  'You act like you’re okay but deep down I know you need faster internet.',
  'Coding: wasted.exe',
  'The only dates I get are updates.',
  'You turn beer into code.', 
  'You turn coffee into code.',
  'Life would be much easier if you had the source code.',
  'I wear glasses so that I can C#.',
  'Free shrugs ¯\_(ツ)_/¯',
  'Love pressing F5 - it’s so refreshing.',
  '//This works… somehow.',
  'Eat, code, and sleep.',
  'World’s okayest coder.',
  'It is a good day for coding.',
  'The only sport I love is e-sport.',
  'First I drink the coffee then I do the coding.',
  'First I drink the beer then I do the coding.',
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
