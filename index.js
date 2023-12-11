var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Data Scientist", "Social Media Specialist"],
  typeSpeed: 70,
  backSpeed: 30,
  backDelay: 500,
  loop: true,
});

setInterval(changeJobTitle, 2000); // Mengubah interval ke 4 detik

//about section

const aboutSection = document.querySelector('.about');

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hide'); // Hapus kelas hide saat elemen masuk
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('show'); // Hapus kelas show saat elemen keluar
      entry.target.classList.add('hide'); // Tambahkan kelas hide untuk efek fade-out
    }
  });
}

const aboutObserver = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

aboutObserver.observe(aboutSection);
