const tickets = [
  'Задели пари колкото за малък подарък за някоя благотворителност',
  'Пий едно малко за здравето на рожденика',
  'Поръчай си / направи си торта',
  'Качи честитка към рожденика в някоя социална мрежа (:',
  'Изслушай "Рожден ден" на Веселин Маринов от край до край. Пикс ор ит дидънт хепан.',
  'Вечерта носи парти шапка',
  'Наконти се като за купон',
  'Пусни на съседите си малко парти музика',
  'Сложи си малко повече концентрат в леда тази вечер',
  'Време ти е за :kopon:!',
  'https://i.ytimg.com/vi/3kyn9Es4HoY/maxresdefault.jpg',
  'Вечеряй на свещи',
  'Надуй си балони',
  'Карантинено пижама парти! Поотделно!',
  'Направи си коктейл',
  'Be happy!',
  'Изяж бонбон',
  'Изиграй една ръченица',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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