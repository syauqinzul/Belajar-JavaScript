// Spread operator (...)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Menggabungkan array
let gabungan = [...arr1, ...arr2];

// Copy array (shallow copy)
let copy = [...arr1];

// Destructuring array
let [pertama, kedua, ...sisanya] = [10, 20, 30, 40, 50];
console.log(pertama); // 10
console.log(kedua);   // 20
console.log(sisanya); // [30, 40, 50]