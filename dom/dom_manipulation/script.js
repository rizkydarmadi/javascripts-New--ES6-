/* const judul = document.getElementById('judul');
judul.innerHTML = '<em> taylor </em>';
 */

/* const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';
judul.style.backgroundColor = 'salmon';
 */

/* const judul = document.getElementsByTagName('h1')[0]; */

/* const p2 = document.querySelector('.p2');
 */

//dom manipulation
// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('new paragraf');
// simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru diakhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//insert Li

const liBaru = document.createElement('li');
const teksliPBaru = document.createTextNode('item baru');

liBaru.appendChild(teksliPBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// remove element

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//replace element
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

//make element
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru');

//add
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);
