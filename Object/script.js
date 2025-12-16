//cara membuat object pada javascript
//object literal
//kekurangan object literal adalah kita harus menulis ulang kode yang sama jika ingin membuat object baru
// problemnya adalah jika ada banyak object yang dibuat, maka kode akan menjadi sangat panjang dan sulit untuk dikelola
let mahasiswa = {
  nama: "Syauqi",
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

let mahasiswa2 = {  
  nama: "Palji",
  energi: 20,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};



