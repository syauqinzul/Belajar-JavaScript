function pilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp < 0.67) return "orang";
  return "semut";
}

function hasilGame(comp, player) {
  if (player === comp) return "SERI!";

  if (player === "gajah") return comp === "orang" ? "MENANG!" : "KALAH!";
  if (player === "orang") return comp === "semut" ? "MENANG!" : "KALAH!";
  if (player === "semut") return comp === "gajah" ? "MENANG!" : "KALAH!";
}

function play(playerChoice) {
  const compChoice = pilihanComputer();
  const hasil = hasilGame(compChoice, playerChoice);

  document.querySelector(".img-komputer").src = compChoice + ".jpg";
  document.querySelector(".info").innerText = hasil;
}

document.querySelector(".gajah").onclick = () => play("gajah");
document.querySelector(".orang").onclick = () => play("orang");
document.querySelector(".semut").onclick = () => play("semut");

const tombolMulai = document.querySelector(".tombol-mulai");
tombolMulai.addEventListener("click", function () {
  const pilihan = ["gajah", "orang", "semut"];
  let i = 0;
  const imgKomputer = document.querySelector(".img-komputer");
  const waktuMulai = new Date().getTime();  
  const interval = setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval(interval);
      return;
    } 
    imgKomputer.src = pilihan[i++] + ".jpg";
    if (i === pilihan.length) i = 0;
  }, 100);
});

const tombolReset = document.querySelector(".tombol-reset");
tombolReset.addEventListener("click", function () {
  document.querySelector(".img-komputer").src = "default.jpg";
  document.querySelector(".info").innerText = "VS";
});

const pilihanPlayer = document.querySelectorAll(".player img");
pilihanPlayer.forEach(function (img) {
  img.addEventListener("click", function () {
    pilihanPlayer.forEach(function (img) {  
      img.classList.remove("active");
    });
    this.classList.add("active");
  });
});

