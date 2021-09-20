function kali() {
  let x = document.getElementById('nilai1').value;
  let y = document.getElementById('nilai2').value;
  let hasil = x * y;
  document.getElementById('hasil').value = hasil;
}
function tambah() {
  let x = parseInt(document.getElementById('nilai1').value);
  let y = parseInt(document.getElementById('nilai2').value);
  let hasil = x + y;
  document.getElementById('hasil').value = hasil;
}
function kurang() {
  let x = document.getElementById('nilai1').value;
  let y = document.getElementById('nilai2').value;
  let hasil = x - y;
  document.getElementById('hasil').value = hasil;
}
function bagi() {
  let x = document.getElementById('nilai1').value;
  let y = document.getElementById('nilai2').value;
  let hasil = x / y;
  document.getElementById('hasil').value = hasil;
}
function pangkat() {
  let x = document.getElementById('nilai1').value;
  let y = document.getElementById('nilai2').value;
  let hasil = x ** y;
  document.getElementById('hasil').value = hasil;
}
