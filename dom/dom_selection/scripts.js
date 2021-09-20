// dom selection
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'taylor swift';

const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue';
}
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';
