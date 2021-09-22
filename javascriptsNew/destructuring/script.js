// Destructuring

// destructuring array
// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b, a - b, a / b];
// }

// classic method
// const jumlah = penjumlahanPerkalian(2, 5)[0];
// const jumlah2 = penjumlahanPerkalian(2, 5)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3); // destructuring function
// console.log(jumlah);
// console.log(kali);

// const [jumlah, kali, kurang, bagi = 'tidak ada'] = penjumlahanPerkalian(2, 3); // destructuring function, [''] untuk menambahkan nilai default
// console.log(jumlah);
// console.log(bagi);

// destructuring object

// function kalkulasi(a, b) {
//   return {
//     kali: a * b,
//     bagi: a / b,
//     kurang: a - b,
//     tambah: a + b,
//   };
// }
// const { tambah, bagi, kali, kurang } = kalkulasi(2, 4); // urutan tidak berpengaruh karena object
// console.log(tambah);

const mhs1 = {
  nama: 'taylor swift',
  umur: 33,
  email: 'rizkyd@gmail.com',
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

//metode biasa
// function cetakMhs(nama, umur) {
//   return `halo, nama saya ${nama}, dan saya berumur ${umur} tahun`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur)); // diset disini

function cetakMhs({ email, nama, umur, nilai: { tugas, uts, uas } }) {
  //object diteruskan sepeti (mhs.nama) dari callback
  return `halo, nama saya ${nama} @${email}, dan saya berumur ${umur} tahun dan nilai uas saya ${uas}`;
}

console.log(cetakMhs(mhs1)); //object mhs1. ditangkap di function
