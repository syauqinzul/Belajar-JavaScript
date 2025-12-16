//declaration function
//digunakan untuk membuat object dengan function biasa
//fungsi ini akan mengembalikan object mahasiswa
//kekurangan dari declaration function adalah setiap method yang dibuat akan dibuat ulang pada setiap object


// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   };  
//   return mahasiswa;
// }

// let syauqi = Mahasiswa("Syauqi", 10);
// let palji = Mahasiswa("Palji", 20);

const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  //method main
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };

  //method tidur
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  };
}

//untuk menghindari pembuatan method yang sama pada setiap object
function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

//untuk membuat object mahasiswa
let syauqi = Mahasiswa("Syauqi", 10);
let palji = Mahasiswa("Palji", 20);

