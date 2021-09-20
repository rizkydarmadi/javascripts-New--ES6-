var mhs = {
  nama: 'taylor swift',
  umur: 32,
  ips: [3.0, 2.5, 3.2],

  jalan: 'st.james park no.01',
  kota: 'brigthon',
  provinsi: 'nashville',
};

var mh2 = {
  nama: 'tyrone migs',
  umur: 70,
  ips: [3.0, 2.5, 3.2],

  jalan: 'st.james park no.01',
  kota: 'london',
  provinsi: 'west ham',
};

function buatObjectMhs(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMhs('taylor', '023044', 'r@gmail.com', 'teknik infotk');

class Mahasiswa {
  constructor(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
  }
}

const mhs4 = new Mahasiswa('max', '0976', 'we@gmail.com', 'teknk mesin');

var obj = { a: 10, nama: 'rizky' };
obj.halo = function () {
  console.log(this);
  console.log('halo');
};
obj.halo();
