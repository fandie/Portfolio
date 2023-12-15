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
  content.style.display = (content.style.display === 'block') ? 'none' : 'block';

  var icon = content.previousElementSibling.querySelector('.bx bxs-plus-square');
  icon.className = (content.style.display === 'block') ? 'bx bxs-minus-square' : 'bx bxs-plus-square';
}
