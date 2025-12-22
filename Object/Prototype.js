// function mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`Halo ${this.nama}, selamat makan!`);
// };

// mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   console.log(`Halo ${this.nama}, selamat bermain!`);
// };

// mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   console.log(`Halo ${this.nama}, selamat tidur!`);
// };

// let syauqi = new mahasiswa("Syauqi", 10);
// let palji = new mahasiswa("Palji", 20);

//versi class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  }

  main(jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  }

  tidur(jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  }
}

let syauqi = new Mahasiswa("Syauqi", 10);
let palji = new Mahasiswa("Palji", 20);
