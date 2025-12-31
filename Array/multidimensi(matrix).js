// Array 2D (matrix 3x3)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Akses elemen
console.log(matrix[1][2]); // Output: 6 (baris 1, kolom 2)

// Iterasi matrix
matrix.forEach((baris, i) => {
    baris.forEach((nilai, j) => {
        console.log(`matrix[${i}][${j}] = ${nilai}`);
    });
}); 