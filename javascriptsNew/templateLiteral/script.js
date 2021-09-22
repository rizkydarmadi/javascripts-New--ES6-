const nama = 'taylor';
const umur = 17;

console.log(`halo nama saya ${nama}, dan usia saya ${umur} tahun`);

const x = 9;

console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`);
const mhs = {
  nama: 'taylor swift',
  umur: 33,
  nrp: '01897',
  email: 'bigmachine@gmail.com',
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
