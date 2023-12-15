var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Data Scientist", "Social Media Specialist"],
  typeSpeed: 70,
  backSpeed: 30,
  backDelay: 500,
  loop: true,
});

 // Perubahan: Menambahkan fungsi untuk menangani perubahan warna pada tab
 function updateTabColors(activeTabButton) {
  // Mengambil semua tab button
  var tabButtons = document.querySelectorAll('.tab-button');
  // Menghapus class 'active' dari semua tab button
  tabButtons.forEach(function (button) {
    button.classList.remove('active');
  });
  // Menambah class 'active' pada tab button yang sedang aktif
  activeTabButton.classList.add('active');
}

// Perubahan: Menyederhanakan fungsi showTab
function showTab(tabId) {
  // Mengambil semua tab pane
  var tabs = document.querySelectorAll('.tab-pane');
  // Menghapus class 'active' dari semua tab pane
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  // Mengambil elemen tab pane yang sedang aktif
  var selectedTab = document.getElementById(tabId);
  // Menambah class 'active' pada tab pane yang sedang aktif
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // Memanggil fungsi updateTabColors dengan tab button yang sedang aktif
  updateTabColors(document.getElementById(tabId.replace('-pane', '')));
}
