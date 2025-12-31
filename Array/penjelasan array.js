// Array adalah struktur data LINEAR yang menyimpan kumpulan elemen
// dalam urutan tertentu, diakses melalui indeks numerik (0-based)

let arr = [10, 20, 30];
// Memory representation:
// Index:   0    1    2
// Value:  10   20   30
// Address: 1000 1004 1008 (contoh alamat memory)

// Urutan elemen DIPERTAHANKAN berdasarkan indeks
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple" - SELALU index 0
console.log(fruits[1]); // "banana" - SELALU index 1

// BUKTI: Iterasi selalu menghasilkan urutan yang sama
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}
// Output: 
// 0: apple
// 1: banana
// 2: cherry


