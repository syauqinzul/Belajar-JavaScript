let angka = [10, 20, 30, 40];

// 1. forEach - eksekusi fungsi untuk tiap elemen
angka.forEach(function(nilai, index) {
    console.log(`Index ${index}: ${nilai}`);
});

// 2. map - buat array baru dari transformasi tiap elemen
let dikaliDua = angka.map(num => num * 2);
// Hasil: [20, 40, 60, 80]

// 3. filter - filter elemen berdasarkan kondisi
let diatas25 = angka.filter(num => num > 25);
// Hasil: [30, 40]

// 4. reduce - akumulasi nilai
let total = angka.reduce((akumulator, nilaiSekarang) => {
    return akumulator + nilaiSekarang;
}, 0);
// Hasil: 100