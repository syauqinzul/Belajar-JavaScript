
let angka = [3, 1, 4, 1, 5, 9, 2];

// Sorting
angka.sort((a, b) => a - b); // Ascending: [1, 1, 2, 3, 4, 5, 9]
angka.sort((a, b) => b - a); // Descending: [9, 5, 4, 3, 2, 1, 1]

// Reverse
angka.reverse(); // Membalik urutan array

// Concat - menggabungkan array
let arr1 = [1, 2];
let arr2 = [3, 4];
let gabungan = arr1.concat(arr2); // [1, 2, 3, 4]

// Slice - potong array (tidak mengubah array asli)
let potongan = angka.slice(2, 5); // Ambil dari index 2 sampai 4