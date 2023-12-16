var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Data Scientist", "Social Media Specialist"],
  typeSpeed: 70,
  backSpeed: 30,
  backDelay: 500,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  // Semua konten diatur awalnya menjadi nonaktif
  var contents = document.querySelectorAll('.accordion-content');
  contents.forEach(function (content) {
    content.style.display = 'none';
  });

  // Ganti ikon bx menjadi minus di awal
  var icons = document.querySelectorAll('.bx bxs-plus-square');
  icons.forEach(function (icon) {
    icon.className = 'bx bxs-plus-square';
  });
});

function toggleAccordion(contentId) {
  var content = document.getElementById(contentId);

  // Cek apakah konten sedang ditampilkan
  var isContentVisible = content.style.display === 'block';

  // Sembunyikan semua konten
  var allContents = document.querySelectorAll('.accordion-content');
  allContents.forEach(function (c) {
    c.style.display = 'none';
  });

  // Ganti ikon semua tab menjadi plus
  var allIcons = document.querySelectorAll('.bx.bxs-minus-square');
  allIcons.forEach(function (i) {
    i.className = 'bx bxs-plus-square';
  });

  // Jika konten tidak sedang ditampilkan, tampilkan konten dan ganti ikon
  if (!isContentVisible) {
    content.style.display = 'block';
    var icon = content.previousElementSibling.querySelector('.bx');
    icon.className = 'bx bxs-minus-square';
  }
}
