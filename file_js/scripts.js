var penumpang = [];

var tambahpenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + 'sudah ada diangkot.');
        return penumpang;
      } else if (i == penumpang.length - 1 && penumpang[i] == namaPenumpang) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log('angkot masih kosong.');
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + 'tidak ada diddalam angkot');
        return penumpang;
      }
    }
  }
};
