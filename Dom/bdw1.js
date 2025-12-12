// Tombol Ubah Warna Background (toggle)
const tombolUbahWarna = document.getElementById("tombolUbahWarna");
tombolUbahWarna.addEventListener("click", function () {
  document.body.classList.toggle("ubah-warna");
});

// Tombol Random Warna
const tombolRandomWarna = document.getElementById("tombolRandomWarna");
tombolRandomWarna.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Slider Merah
const sMerah = document.querySelector(".sMerah");
const kotakMerah = document.querySelector(".kotak.merah");

sMerah.addEventListener("input", function () {
  const nilai = sMerah.value;
  kotakMerah.style.backgroundColor = `rgb(${nilai}, 0, 0)`;

  updateBackground();
});

// Slider Hijau
const sHijau = document.querySelector(".sHijau");
const kotakHijau = document.querySelector(".kotak.hijau");

sHijau.addEventListener("input", function () {
  const nilai = sHijau.value;
  kotakHijau.style.backgroundColor = `rgb(0, ${nilai}, 0)`;

  updateBackground();
});

// Slider Biru
const sBiru = document.querySelector(".sBiru");
const kotakBiru = document.querySelector(".kotak.biru");

sBiru.addEventListener("input", function () {
  const nilai = sBiru.value;
  kotakBiru.style.backgroundColor = `rgb(0, 0, ${nilai})`;

  updateBackground();
});

// Fungsi untuk update background dari slider
function updateBackground() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
