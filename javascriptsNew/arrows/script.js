// const tampilnama = function (nama) {
//   return `halo, ${nama}`;
// };

//arrow function
// const tampilnama = (nama) => {
//   return `halo. ${nama}`;
// };
// console.log(tampilnama('taylor'));

// double parameter
// const tampilnama = (nama, kencantikan) => {
//   return `halo. ${nama} kamu ${kencantikan}`;
// };
// console.log(tampilnama('pluim', 'pass'));

// const tampilnama = (nama) => `halo. ${nama}`; // function nama return halo
// console.log(tampilnama('olivia'));

// const tampilnama = () => `halo dunia`; // expersi // function()
// console.log(tampilnama());

// let mahasiswa = ['sheryl sheinafia', 'taylor alison swift', 'james kokolomel'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let halland = ['erling', 23, 'halland'];
// let typedata = halland.map((overall) => typeof overall);

// for (let i = 0; i < typedata.length; i++) {
//   if (typedata[i] == 'number') {
//     typedata[i] = 'jeselyn';
//   }
// }

// console.log(typedata);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jmlhuruf: nama.length }));
// console.table(jumlahHuruf);

// const mahasiswa = function () {
//   this.nama = 'rizky';
//   this.umur = 23;
//   this.sayhello = function () {
//     console.log(`halo my name is ${this.nama} Im ${this.umur} y o, thank you`);
//   };
// };
// const rizky = new mahasiswa();

// const mahasiswa = function () {
//   this.nama = 'rizky';
//   this.umur = 23;
//   this.sayhello = () => {
//     console.log(`halo my name is ${this.nama} Im ${this.umur} y o, thank you`);
//   };
// };
// const rizky = new mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
  this.classList.toggle('size');
  setInterval(() => {
    this.classList.toggle('caption'); // set interval tidak memiliki this di dalam functionya ini disarankan menggunakan arrow => function untuk mengambil this didalam scope parentya
  }, 600);
});
