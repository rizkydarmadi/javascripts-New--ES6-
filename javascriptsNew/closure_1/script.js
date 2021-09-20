// function init() {
//   return function tampilNama(nama) {
//     console.log(nama);
//   };
// }

// let panggilnama = init();
// panggilnama('taylor jack');

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`halo ${nama}, selamat ${waktu},hand`);
//   };
// }
// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('taylor');
// selamatMalam('gal gadot');

// console.dir(selamatMalam);

// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();