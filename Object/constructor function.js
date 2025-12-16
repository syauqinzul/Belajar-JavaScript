//constructor function
//digunakan untuk membuat object dengan template yang sama
//kebanyakan huruf pertama pada nama constructor function menggunakan huruf besar
//keyword new digunakan untuk membuat object baru dari constructor function
function mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };  
}

let syauqi = new mahasiswa("Syauqi", 10);
let palji = new mahasiswa("Palji", 20);

