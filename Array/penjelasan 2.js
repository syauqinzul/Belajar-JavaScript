// Konsep penting dalam programming
let arr = ["pertama", "kedua", "ketiga"];
// Indeks:  0         1        2
// Human:  1st       2nd      3rd

// Mengapa dari 0?
// 1. ALASAN HISTORIS: Bahasa C (pendahulu) menggunakan 0-based
// 2. ALASAN MATEMATIS: 
//    arr[i] = *(arr + i) dalam pointer arithmetic
// 3. ALASAN PERFORMANCE: Offset calculation lebih efisien

// Contoh perhitungan memory address:
// Base address: 1000
// Element size: 4 bytes
// arr[0] = 1000 + (0 * 4) = 1000
// arr[1] = 1000 + (1 * 4) = 1004
// arr[2] = 1000 + (2 * 4) = 1008

// Array JavaScript bisa bertambah/berkurang secara otomatis
let dynamicArray = []; // length: 0
dynamicArray.push(1);  // length: 1
dynamicArray.push(2);  // length: 2
dynamicArray.pop();    // length: 1

// Perbandingan dengan bahasa lain:
// C/C++/Java: Fixed size (harus declare ukuran awal)
// JavaScript: Dynamic (memory dialokasikan otomatis)