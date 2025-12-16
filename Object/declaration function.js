//declaration function
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  
  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };
  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };  
  return mahasiswa;
}

let syauqi = Mahasiswa("Syauqi", 10);
let palji = Mahasiswa("Palji", 20);
syauqi.makan(5);
palji.main(2);
} 
  console.log(`Halo ${this.nama}, selamat bermain!`); 
  palji.makan(10);

};
