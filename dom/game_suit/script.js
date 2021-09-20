// var tanya = true;
// while (tanya) {
//   // menangkap pilihan player
//   var p = prompt('pilih : gajah, semut, orang');

//   // menangkap pilihan computer
//   // membangkitkan bilangan random
//   var comp = Math.random();

//   if (comp < 0.34) {
//     comp = 'gajah';
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = 'orang';
//   } else {
//     comp = 'semut';
//   }

//   // menentukan rules
//   var hasil = '';
//   if (p == comp) {
//     hasil = 'SERI!';
//   } else if (p == 'gajah') {
//     hasil = comp == 'orang' ? 'MENANG!' : 'KALAH!';
//   } else if (p == 'orang') {
//     hasil = comp == 'gajah' ? 'KALAH!' : 'MENANG!';
//   } else if (p == 'semut') {
//     hasil = comp == 'orang' ? 'KALAH' : 'MENANG!';
//   } else {
//     hasil = 'memasukkan pilihan yang salah!';
//   }

//   // tampilkan hasilnya
//   alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//   tanya = confirm('lagi?');
// }

// alert('terimakasih sudah bermain.');
function getpilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return 'gajah';
  else if (comp >= 0.34 && comp < 0.67) return 'orang';
  else {
    return 'semut';
  }
}
function getHasil(comp, player) {
  if (player == comp) return 'SERI!';
  if (player == 'gajah') return comp == 'orang' ? 'MENANG!' : 'KALAH!';
  if (player == 'orang') return comp == 'gajah' ? 'KALAH!' : 'MENANG!';
  if (player == 'semut') return comp == 'orang' ? 'KALAH' : 'MENANG!';
}

function putar() {
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanComputer = getpilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//   const pilihanComputer = getpilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// const porang = document.querySelector('.orang');
// porang.addEventListener('click', function () {
//   const pilihanComputer = getpilihanComputer();
//   const pilihanPlayer = porang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// const psemut = document.querySelector('.semut');
// psemut.addEventListener('click', function () {
//   const pilihanComputer = getpilihanComputer();
//   const pilihanPlayer = psemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });
