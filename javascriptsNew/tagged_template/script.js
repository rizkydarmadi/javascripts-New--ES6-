// const nama = 'sandikha galih';
// const umur = 33;

// function coba(strings, ...values) {
//   return strings.reduce((result, str, i) => `${result} ${str} ${values[i] || ''}`, '');
// }

// const str = coba`halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

const nama = 'sandikha galih';
const umur = 33;
const email = 'taylorswift@gmail.com';

function coba(strings, ...values) {
  return strings.reduce((result, str, i) => `${result} ${str} <span class = "hl"> ${values[i] || ''}</span>`, '');
}

const str = coba`halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}`;
console.log(str);

document.body.innerHTML = str;
