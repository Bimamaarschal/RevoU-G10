/*
-- RevoU Studi Independen Bacth-5 oleh Groub 10 section semarang  

Github : 

JS Custom ini di buat oleh Grub 10 untuk Project capstone
Software Enginering Revou AUG23
*/

/* 
-----------------------------------------------------------------
Daftar Konten Java Script
-----------------------------------------------------------------
01. Tampilan - 1 

-----------------------------------------------------------------
 */

/* 
-----------------------------------------------------------------
Tampilan - 1 
----------------------------------------------------------------- 
*/

// Fade respon gambar
document.addEventListener("DOMContentLoaded", function () {
  var image = document.getElementById("tampil1-10smg-fade-image");
  image.classList.add("loaded");
});

// Teks changing
const changingTextElement = document.getElementById(
  "tampil1-10smg-text-changing"
);
const words = [
  "keterampilan",
  "informatika",
  "ekonomi",
  "sistem informasi",
  "manajemen",
];
let currentWordIndex = 0;
function changeWord() {
  changingTextElement.textContent = words[currentWordIndex];
  currentWordIndex = (currentWordIndex + 1) % words.length;
}
setInterval(changeWord, 4000);

// Ketika tautan di navbar di-klik
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  navLinks[0].classList.add("active");

  document.addEventListener("scroll", function () {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        const sectionId = section.getAttribute("id");
        const activeLink = document.querySelector(
          `nav a[href="#${sectionId}"]`
        );
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        activeLink.classList.add("active");
      }
    });
  });
});
