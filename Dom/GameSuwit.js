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

      //mengambil atribut alt dari gambar yang diklik
      const pilihan = img.getAttribute("alt");
      if (pilihan === this.getAttribute("alt")) {
        play(pilihan);

      //untuk mengklik tombol reset secara otomatis setelah memilih
      const tombolReset = document.querySelector(".tombol-reset");
        tombolReset.click();

      //untuk mengklik tombol mulai secara otomatis setelah reset
      const tombolMulai = document.querySelector(".tombol-mulai");
        tombolMulai.click();

      //untuk menambahkan class active pada gambar yang diklik
        return;
      }
    });
    this.classList.add("active");
  });

  //untuk menghapus class active dari semua gambar
  pilihanPlayer.forEach(function (img) {
    img.classList.remove("active");
  });

  //mengambil atribut alt dari gambar yang diklik
  const pilihan = img.getAttribute("alt");
  if (pilihan === this.getAttribute("alt")) {
    play(pilihan);
    return;
  }
  this.classList.add("active");

  //fungsi play
  function play(pilihan) {  
    const compChoice = pilihanComputer();
    const hasil = hasilGame(compChoice, pilihan);

    document.querySelector(".img-komputer").src = compChoice + ".jpg";
    document.querySelector(".info").innerText = hasil;
  }

  //fungsi pilihan komputer
  const pilihanComputer = () => {
    const comp = Math.random();
    if (comp < 0.34) return "gajah";
    if (comp < 0.67) return "orang";
    return "semut";
  }

  //fungsi menentukan hasil game
  function hasilGame(comp, player) {
    if (player === comp) return "SERI!";
    if (player === "gajah") return comp === "orang" ? "MENANG!" : "KALAH!";
    if (player === "orang") return comp === "semut" ? "MENANG!" : "KALAH!";
    if (player === "semut") return comp === "gajah" ? "MENANG!" : "KALAH!";
  }

  //fungsi putar gambar komputer
  function putar() {
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
  }

  //fungsi reset
  function resetGame() {
    const tombolReset = document.querySelector(".tombol-reset");
    tombolReset.click();

    const tombolMulai = document.querySelector(".tombol-mulai");
    tombolMulai.click();
  }
  //untuk mereset tampilan
  function reset() {  
    document.querySelector(".img-komputer").src = "default.jpg";
    document.querySelector(".info").innerText = "VS";
  }
});
