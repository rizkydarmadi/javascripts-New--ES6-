// desctructing variable

const perkenalan = ['halo', 'senang melihat', 'anda', 'besok main yuk'];

const [subject, predikat, , object] = perkenalan;
console.log(object);

// swab

// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

//rest parameter
const [a, ...values] = [1, 2, 3, 4, 5, 6, 7];
console.log(a);
console.log(values);

//destructing object
// const mhs = {
//   nama: 'sandhika galih',
//   umur: 33,
// };

// const { nama, umur } = mhs;
// console.log(nama);

//assigment tanpa deklarasi

// ({ nama, umur } = { nama: 'sandhika galih', umur: 33 });
// console.log(umur);

// assigned ke variable baru

// const mhs = {
//   nama: 'sandhika galih',
//   umur: 33,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);

// nilai default
// const mhs = {
//   nama: 'sandhika galih',
//   umur: 33,
//   email: 'lalla@gmail.com',
// };

// const { nama, umur, email = 'deafult@email.com' } = mhs;
// console.log(email);

// nilai default ke assigend baru

// const mhs = {
//   nama: 'sandhika galih',
//   umur: 33,
//   email: 'lalla@gmail.com',
// };

// const { nama: n, umur: u, email: e = 'deafult@email.com' } = mhs;
// console.log(e);

// rest parameter
// const mhs = {
//   nama: 'sandhika galih',
//   umur: 33,
//   email: 'lalla@gmail.com',
// };

// const { nama, ...value } = mhs;
// console.log(value);

//mengambil field pada object
const mhs = {
  id: 123,
  nama: 'sandhika galih',
  umur: 33,
  email: 'lalla@gmail.com',
};

function getIdMhs({ nama }) {
  return nama;
}

console.log(getIdMhs(mhs));
