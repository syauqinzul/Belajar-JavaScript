let users = [
    {id: 1, name: "Alice", age: 25},
    {id: 2, name: "Bob", age: 30},
    {id: 3, name: "Charlie", age: 25}
];

// find - cari elemen pertama yang memenuhi kondisi
let userBob = users.find(user => user.name === "Bob");
// Hasil: {id: 2, name: "Bob", age: 30}

// findIndex - cari index elemen pertama yang memenuhi kondisi
let indexCharlie = users.findIndex(user => user.name === "Charlie");
// Hasil: 2

// some - apakah minimal satu elemen memenuhi kondisi?
let adaYang25 = users.some(user => user.age === 25);
// Hasil: true

// every - apakah semua elemen memenuhi kondisi?
let semuaDiatas20 = users.every(user => user.age > 20);
// Hasil: true