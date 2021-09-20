const angka = [1, -2, 3, 9, 4, -5, -6, 7, 10, 8];

// using for
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] > 3) {
//     console.log(angka[i]);
//   }
// }

// filter
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// console.log(newAngka);

// filter dengan arrow
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map dengan arrow
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue, 2);
// console.log(newAngka);

const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur);
console.log(hasil);
