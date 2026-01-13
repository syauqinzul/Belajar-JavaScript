Penjelasan Detail Kode JavaScript:
1. Selektor DOM
Menggunakan document.getElementById() dan document.querySelectorAll() untuk mendapatkan elemen HTML yang akan dimanipulasi.

2. Variabel State
Menyimpan data kalkulator: previousOperand, currentOperand, dan operation.

3. Fungsi updateDisplay()
Memperbarui tampilan kalkulator berdasarkan state saat ini.

4. Fungsi appendNumber(number)
Menambahkan angka ke currentOperand dengan pengecualian untuk titik desimal ganda.

5. Fungsi chooseOperation(selectedOperation)
Menyimpan operasi matematika yang dipilih dan mempersiapkan untuk perhitungan.

6. Fungsi compute()
Melakukan perhitungan matematika berdasarkan operasi yang dipilih.

7. Fungsi clear()
Mengembalikan kalkulator ke state awal.

8. Fungsi deleteNumber()
Menghapus digit terakhir dari currentOperand.

9. Event Listeners
Menangani klik tombol dan input keyboard.

10. Inisialisasi
Memanggil updateDisplay() untuk menampilkan kalkulator dengan nilai default.