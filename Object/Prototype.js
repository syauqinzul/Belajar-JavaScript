function mahasiswa(nama, energi) {
  let this  = object.create(mahasiswa.prototype);
  this.nama = nama;
  this.energi = energi;
  return this;
}

mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  console.log(`Halo ${this.nama}, selamat makan!`);
};

mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  console.log(`Halo ${this.nama}, selamat bermain!`);
};

mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  console.log(`Halo ${this.nama}, selamat tidur!`);
}

let syauqi = new mahasiswa("Syauqi", 10);
let palji = new mahasiswa("Palji", 20);

