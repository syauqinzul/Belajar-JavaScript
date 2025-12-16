//cara membuat object pada javascript
//object literal
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



