// Mendapatkan elemen tautan berdasarkan ID
var informasiLink = document.getElementById("info");

// Menambahkan event listener untuk menangkap klik pada tautan
informasiLink.addEventListener("click", function(event) {
    // Mencegah navigasi ke href yang sebenarnya
    event.preventDefault();
    
    // Menampilkan alert
    alert("UNTUK FITUR INFORMASI SAAT INI BELUM TERSEDIA");
});


// Mendapatkan elemen tautan berdasarkan ID
var informasiLink = document.getElementById("menu");

// Menambahkan event listener untuk menangkap klik pada tautan
informasiLink.addEventListener("click", function(event) {
    // Mencegah navigasi ke href yang sebenarnya
    event.preventDefault();
    
    // Menampilkan alert
    alert("UNTUK FITUR MENU SAAT INI BELUM TERSEDIA");
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
