// const mhs = {
//   nama: 'taylor swift',
//   umur: 32,
//   idk: '123456',
//   email: 'taytay@?investment.com',
// };

// const el = `<div class="mhs">

// <h2>${mhs.nama}</h2>
// <span class="idk">${mhs.idk}</span>

// </div>`;

// const mhs = [
//   {
//     nama: 'taylor swift',
//     email: 'taylor@gmail.com',
//   },
//   {
//     nama: 'suzybae',
//     email: 'taylor@gmail.com',
//   },
//   {
//     nama: 'sigrid',
//     email: 'taylor@gmail.com',
//   },
// ];

// map looping
// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (m) => `<ul >
// <li >${m.nama}</li>
// <li >${m.email}</li>
// </ul>`
//   )
//   .join('')}
// </div>`;

// 3 conditional

// const lagu = {
//   judul: 'exile',
//   penyanyi: 'taylor swift',
// };

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat ? `feat ${lagu.feat}` : '@'}
// </li>
// </ul>
// </div>`;

//
const mhs = {
  nama: ' taylor swift',
  semester: 5,
  matakuliah: ['rekayasa web', 'analisis dan peancangan web', 'bahasa automata', 'statistika'],
};

function cetakMataKuliah(coba) {
  return `
    <ol>
    ${coba.map((mk) => `<li> ${mk}</li>`).join('')}

    </ol>`;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">semester : ${mhs.semester}</span>
<h4>mata kuliah</h4>
${cetakMataKuliah(mhs.matakuliah)}
</div>`;

document.body.innerHTML = el;
