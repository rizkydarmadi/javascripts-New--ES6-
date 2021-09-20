// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//   p3.style.backgroundColor = 'black';
// }

// function ubahWarnaP2() {
//   p2.style.backgroundColor = 'black';
// }
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//   //cath elemet
//   const ulBaru = document.querySelector('section#b ul');
//   //create elemet
//   const liBaru = document.createElement('li');
//   // add text
//   const teksLibaru = document.createTextNode('item baru');
//   //save
//   liBaru.appendChild(teksLibaru);
//   ulBaru.appendChild(liBaru);
// });

// add eventlistener
const p3 = document.querySelector('.p3');
p3.addEventListener('click', function () {
  p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('click', function () {
  p3.style.color = 'red';
});
p3.addEventListener('mouseenter', function () {
  p3.style.height = '64px';
});
p3.addEventListener('mouseleave', function () {
  p3.style.height = '0%';
});
