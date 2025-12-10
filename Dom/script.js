// DOM Selection
// document.getElementById()
const header = document.getElementById("header");

// document.getElementsByTagName (HTMLCollection)
// mirip HTMLCollection itu seperti array tapi bukan array beneran
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.fontFamily = "Arial, sans-serif";
}
p[0].style.background = "color: green;"; // tidak berpengaruh karena HTMLCollection

const h1 = document.getElementsByTagName("h1");

h1[0].style.textTransform = "uppercase";

// document.getElementsByClassName (HTMLCollection)
// mengubah warna teks elemen dengan class "buah" menjadi merah
const buahElements = document.getElementsByClassName("buah");
for (let i = 0; i < buahElements.length; i++) {
  buahElements[i].style.color = "red";
}

// querySelector
// mengubah gaya font elemen pertama dengan class "buah" di dalam elemen dengan class "fruit-list"
const firstFruit = document.querySelector(".fruit-list .buah");
firstFruit.style.fontWeight = "bold";

// querySelectorAll
// mengubah latar belakang semua elemen dengan class "buah" menjadi kuning
const allFruits = document.querySelectorAll(".buah");
allFruits.forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});


// Manipulasi DOM
// menambahkan elemen list baru ke dalam daftar buah
const fruitList = document.querySelector(".fruit-list");
const newFruit = document.createElement("li");
newFruit.className = "buah";
newFruit.innerHTML = '<i class="fas fa-lemon fruit-icon"></i> Lemon';
fruitList.appendChild(newFruit);

// mengubah latar belakang lemon menjadi oranye
newFruit.style.backgroundColor = "orange";

// menampilkan icon pada lemon
const lemonIcon = newFruit.querySelector(".fruit-icon");
lemonIcon.style.color = "white";

// memberikan margin pada icon lemon
lemonIcon.style.marginRight = "8px";

// menampilkan lingkaran sebelum icon lemon
lemonIcon.style.border = "2px solid white";
lemonIcon.style.borderRadius = "50%";
lemonIcon.style.padding = "4px";

// mengubah warna teks elemen dengan class "buah" menjadi ungu
for (let i = 0; i < buahElements.length; i++) {
  buahElements[i].style.color = "purple";
}

// Verify DOM is accessible
// (POHON HIERARKI)<DOM TREE>
console.log(document);

// menampilkan struktur DOM di konsol
function logDomTree(element, indent = 0) {
  console.log(" ".repeat(indent) + element.tagName);
  Array.from(element.children).forEach((child) =>
    logDomTree(child, indent + 2)
  );
} 
logDomTree(document.body);

// Output informasi DOM ke konsol
// menampilkan teks dari elemen dengan tag <h1>
console.log("Teks elemen <h1>:", h1[0].textContent);

// menampilkan teks dari semua elemen dengan class "buah"
allFruits.forEach((fruit) => {
  console.log(fruit.textContent);
});

// menampilkan atribut id dari elemen dengan id "header"
console.log("Atribut id dari elemen header:", header.id);

// menampilkan atribut class dari elemen dengan id "header"
console.log(header.getAttribute("class"));
console.log(header.className);

// menampilkan jumlah elemen dengan tag <p>
console.log("Jumlah elemen <p>:", p.length);

// menampilkan jumlah elemen dengan class "buah"
console.log("Jumlah elemen dengan class 'buah':", buahElements.length);

// menampilkan teks dari elemen pertama dengan class "buah"
console.log("Teks elemen pertama dengan class 'buah':", firstFruit.textContent);

// menampilkan teks dari elemen list baru yang ditambahkan
console.log("Teks elemen list baru:", newFruit.textContent);  

// menampilkan seluruh elemen dengan class "buah"
console.log("Seluruh elemen dengan class 'buah':", allFruits);

// menampilkan elemen dengan id "header"
console.log("Elemen dengan id 'header':", header);

// menampilkan elemen dengan tag <h1>
console.log("Elemen dengan tag <h1>:", h1[0]);

// menampilkan elemen dengan tag <p>
console.log("Elemen dengan tag <p>:", p);



