//ambil semua element
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang 'javascript lanjutan'
let jslanjut = videos
  .filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))

  // ambil durasi masing" video
  .map((item) => item.dataset.duration)
  // ubah durasi menjadi float ubah menit menjadi detik
  .map((waktu) => {
    const parts = waktu.split(':').map((part) => parseFloat(part)); // split waktu
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, detik) => total + detik);
// jumlahkan semua detik

const jam = Math.floor(jslanjut / 3600);
jslanjut = jslanjut - jam * 3600;
// ubah formatnya jadi jam menit detik
const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - menit * 60;

// simpan di dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;
const jmlvideo = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const jmlvideos = document.querySelector('.jumlah-video');
jmlvideos.textContent = `${jmlvideo} video`;
