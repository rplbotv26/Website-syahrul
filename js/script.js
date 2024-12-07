// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Menambahkan efek shadow saat scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// Menu Toggle untuk Mobile
menu.onclick = () => {
  navbar.classList.toggle("active");
};

// Menyembunyikan menu saat scroll
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkmode");
const darkModeDesktop = document.getElementById("darkmode-desktop");
const body = document.body;

// Fungsi untuk mengaktifkan dark mode dan memperbarui ikon
function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  updateDarkModeIcon();
}

// Menambahkan event listener untuk toggle dark mode di Android
darkModeToggle.addEventListener("click", toggleDarkMode);

// Menambahkan event listener untuk toggle dark mode di desktop
if (darkModeDesktop) {
  darkModeDesktop.addEventListener("click", toggleDarkMode);
}

// Fungsi untuk mengganti ikon dark mode antara "bx-moon" dan "bx-sun"
function updateDarkModeIcon() {
  const iconClass = body.classList.contains("dark-mode") ? "bx-sun" : "bx-moon";
  const darkModeIcons = [darkModeToggle, darkModeDesktop].filter(Boolean);

  darkModeIcons.forEach((icon) => {
    icon.querySelector("i").className = `bx ${iconClass} text-2xl`;
  });
}

// Inisialisasi ikon berdasarkan mode saat halaman dimuat
window.addEventListener("DOMContentLoaded", updateDarkModeIcon);

// Form Submission
function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validasi input
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  alert("Message sent!");
  document.getElementById("contactForm").reset();
}

// Animasi menggunakan AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  delay: 100,
});

// Fungsi untuk mengulangi animasi saat bagian "About" muncul
const aboutSection = document.getElementById("about");

const resetAnimation = () => {
  const aboutImg = document.querySelector(".about-img");
  const aboutText = document.querySelector(".about-text");
  const infoBoxes = document.querySelectorAll(".information .info-box");
  const btn = document.querySelector(".btn");

  // Hapus kelas animasi
  aboutImg.style.opacity = "0";
  aboutText.style.opacity = "0";
  infoBoxes.forEach((box) => {
    box.style.opacity = "0";
  });
  btn.style.opacity = "0";

  // Menerapkan animasi setelah sedikit penundaan
  setTimeout(() => {
    aboutImg.style.animation = "fadeIn 1s forwards";
    aboutText.style.animation = "fadeIn 1s forwards";
    infoBoxes.forEach((box, index) => {
      box.style.animation = "fadeIn 1s forwards";
      box.style.animationDelay = `${0.8 + 0.2 * index}s`;
    });
    btn.style.animation = "fadeIn 1s forwards";
  }, 100);
};

// Deteksi saat bagian "About" masuk ke viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      resetAnimation();
    }
  });
});

// Amati bagian "About"
observer.observe(aboutSection);

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuIcon.innerHTML = isMenuOpen ? '<i class="bx bx-menu text-3xl"></i>' : '<i class="bx bx-x text-3xl"></i>';
    isMenuOpen = !isMenuOpen;
  });
});
