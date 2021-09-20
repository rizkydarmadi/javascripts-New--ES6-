const tombolGantiWarna = document.getElementById('tombolGantiWarna');
// const body = document.getElementsByTagName('body');
tombolGantiWarna.onclick = function () {
  //   document.body.style.backgroundColor = 'lightblue';
  //   document.body.setAttribute('class', 'biru-muda');
  document.body.classList.toggle('biru-muda');
};
// make element
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('random color'); // fill
tAcakWarna.appendChild(teksTombol); // insert
tAcakWarna.setAttribute('type', 'button'); // add atribut like a type,class,id or etc
tombolGantiWarna.after(tAcakWarna); // put all this element after tomblblablabla..:)

tAcakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sMerah = document.querySelector('input[name=sMerah]'); // catch selector
sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = shijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'; // fill rgb
});

const shijau = document.querySelector('input[name=shijau]');
shijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = shijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sBiru = document.querySelector('input[name=sBiru]');
sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = shijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

document.body.addEventListener('mousemove', function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});
