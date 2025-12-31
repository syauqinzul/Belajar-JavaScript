let arr = ["a", "b", "c"];

// Menambah di akhir
arr.push("d"); // ["a", "b", "c", "d"]
let last = arr.pop(); // "d", arr = ["a", "b", "c"]

// Menambah di awal
arr.unshift("z"); // ["z", "a", "b", "c"]
let first = arr.shift(); // "z", arr = ["a", "b", "c"]

// Menghapus/mentambahkan di posisi tertentu
arr.splice(1, 1, "x", "y"); 
// Hapus 1 elemen dari index 1, tambah "x" dan "y"
// Hasil: ["a", "x", "y", "c"]