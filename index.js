const jobTitles = ['Junior Web Frontend Developer', 'Junior Data Science', 'Social Media Specialist'];
let currentIndex = 0;

function changeJobTitle() {
    const jobTitleElement = document.getElementById('job-title');
    jobTitleElement.textContent = jobTitles[currentIndex];
    currentIndex = (currentIndex + 1) % jobTitles.length;
}

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