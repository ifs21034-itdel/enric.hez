//hamburgerMenu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Modal Description

const overlay = document.querySelector(".overlay");

// modal 1
const modal1 = document.querySelector(".modal1");
const btnCloseModal1 = document.querySelector(".close-modal1");
const btnOpenModal1 = document.querySelectorAll(".project-btn1");

const openModal1 = function () {
  console.log("Button clicked");
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal1 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal1.length; i++) {
  btnOpenModal1[i].addEventListener("click", openModal1);
}

btnCloseModal1.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
  }
});

// modal 2
const modal2 = document.querySelector(".modal2");
const btnCloseModal2 = document.querySelector(".close-modal2");
const btnOpenModal2 = document.querySelectorAll(".project-btn2");

const openModal2 = function () {
  console.log("Button clicked");
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal2.length; i++) {
  btnOpenModal2[i].addEventListener("click", openModal2);
}

btnCloseModal2.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});

// modal 3
const modal3 = document.querySelector(".modal3");
const btnCloseModal3 = document.querySelector(".close-modal3");
const btnOpenModal3 = document.querySelectorAll(".project-btn3");

const openModal3 = function () {
  console.log("Button clicked");
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal3 = function () {
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal3.length; i++) {
  btnOpenModal3[i].addEventListener("click", openModal3);
}

btnCloseModal3.addEventListener("click", closeModal3);
overlay.addEventListener("click", closeModal3);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    closeModal3();
  }
});
// modal 4
const modal4 = document.querySelector(".modal4");
const btnCloseModal4 = document.querySelector(".close-modal4");
const btnOpenModal4 = document.querySelectorAll(".project-btn4");

const openModal4 = function () {
  console.log("Button clicked");
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal4 = function () {
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal3.length; i++) {
  btnOpenModal4[i].addEventListener("click", openModal4);
}

btnCloseModal4.addEventListener("click", closeModal4);
overlay.addEventListener("click", closeModal4);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal4.classList.contains("hidden")) {
    closeModal4();
  }
});

// modal 5
const modal5 = document.querySelector(".modal5");
const btnCloseModal5 = document.querySelector(".close-modal5");
const btnOpenModal5 = document.querySelectorAll(".project-btn5");

const openModal5 = function () {
  console.log("Button clicked");
  modal5.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal5 = function () {
  modal5.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal5.length; i++) {
  btnOpenModal5[i].addEventListener("click", openModal5);
}

btnCloseModal5.addEventListener("click", closeModal5);
overlay.addEventListener("click", closeModal5);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal4.classList.contains("hidden")) {
    closeModal5();
  }
});

//fungsi carousel
let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll(".certificate");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(slideIndex);

// Ambil elemen-elemen form
const form = document.querySelector("#feedback-form");
const namaInput = document.querySelector("#nama");
const emailInput = document.querySelector("#email");
const teleponInput = document.querySelector("#telepon");
const feedbackInput = document.querySelector("#feedback");

// Fungsi untuk memeriksa apakah email valid
function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return pattern.test(email);
}

// Fungsi untuk menampilkan pesan kesalahan
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Fungsi untuk menghilangkan pesan kesalahan
function clearError(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  const small = formControl.querySelector("small");
  small.innerText = "";
}

// Fungsi untuk memeriksa apakah semua input valid
function checkInputs() {
  let isValid = true;

  if (namaInput.value.trim() === "") {
    showError(namaInput, "Nama harus diisi");
    isValid = false;
  } else {
    clearError(namaInput);
  }

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email harus diisi");
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, "Email tidak valid");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  if (teleponInput.value.trim() === "") {
    showError(teleponInput, "No Telepon harus diisi");
    isValid = false;
  } else {
    clearError(teleponInput);
  }

  if (feedbackInput.value.trim() === "") {
    showError(feedbackInput, "Feedback/Saran harus diisi");
    isValid = false;
  } else {
    clearError(feedbackInput);
  }

  return isValid;
}

// Event listener untuk mengirim form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (checkInputs()) {
    alert("Form berhasil dikirim!");

    form.reset();
  }
});


// --
// Ambil semua elemen progress
const progressBars = document.querySelectorAll(".progress");

// Fungsi untuk menjalankan ulang animasi
function runAnimation() {
  progressBars.forEach((progressBar) => {
    const targetWidth = progressBar.getAttribute("data-percent");
    progressBar.style.width = "0"; // Set lebar kembali ke 0

    setTimeout(() => {
      progressBar.style.width = targetWidth + "%"; // Set lebar sesuai dengan persentase
    }, 100); // Menunggu sebentar sebelum memulai animasi
  });
}

// Fungsi untuk menjalankan ulang animasi setelah animasi selesai
function restartAnimation() {
  progressBars.forEach((progressBar) => {
    progressBar.style.width = "100%"; // Set lebar ke 100% saat selesai
  });
  
  setTimeout(() => {
    progressBars.forEach((progressBar) => {
      progressBar.style.width = "0"; // Set lebar kembali ke 0 setelah berhenti selama 1 detik
    });
  }, 1000); // Berhenti selama 1 detik
  
  setTimeout(() => {
    runAnimation(); // Setelah berhenti selama 1 detik, jalankan ulang animasi dari awal
  }, 2000); // Jeda selama 2 detik sebelum memulai ulang animasi
}

// Jalankan ulang animasi untuk pertama kali
runAnimation();

// filter
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}