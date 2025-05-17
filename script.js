// Halaman awal //
Swal.fire({
  title: "<strong>Lo Lie Liana & 11</strong>",   // Judul alert dengan teks HTML yang diformat
  imageUrl: "Liana.JPEG",                         // Judul alert dengan teks HTML yang diformat
  imageWidth: 210,                               // Lebar gambar
  imageHeight: 270,                              // Tinggi gambar
  html: `
    <strong><i>Fake sancti quam celerrime putrescent.</i></strong> <br> 
    Fake saints will rot the fastest.<br>
    Orang-orang kudus palsu akan membusuk paling cepat.<br>
    ICT memberikan tugas yang luar biasa menarik, saya hampir menangis mengerjakannya.
  `, 
  // Quotes dalam bahasa Latin
  // Terjemahan Inggris
  // Terjemahan Indonesia
  // Rostingan untuk ICT
  showCloseButton: true,  // Menampilkan tombol tutup (X) di pojok
});


// Fungsi efek ketik //
function typeText() { 
  if (index < text.length) {                                     // Jika index masih dalam panjang teks
    textElement.textContent = text.slice(0, index + 1);          // Potong teks sampai index sekarang dan tampilkan
    index++;                                                     // Tambah index agar huruf berikutnya bisa ditampilkan
    setTimeout(typeText, speed);                                 // Tunggu sesuai kecepatan, lalu jalankan ulang fungsi
  }
  }

const textElement = document.getElementById('text');                                // Ambil elemen HTML dengan ID 'text'
const speedInput = document.getElementById('speed');                                // Ambil elemen input kecepatan
const text = "We Love ICT Everyday, Before The New ICT Teacher Came !";             // Teks yang akan diketik
let index = 0;                                                                      // Posisi huruf yang sedang diketik

// Pastikan value speed tidak 0 //
let speed = 1000 / (parseInt(speedInput.value) || 1);             // Ambil nilai input dan ubah ke milidetik per karakter

function startTyping() {
  index = 0;                                         // Reset index ke awal
  currentText = '';                                  // Kosongkan teks sekarang
  textDisplay.textContent = '';                      // Hapus isi tampilan
  typeText(parseInt(speedInput.value));              // Mulai mengetik ulang dengan kecepatan baru
}

// Saat input kecepatan akan berubah //
speedInput.addEventListener('input', (e) => {                     // Hitung ulang kecepatan saat user mengubah nilai input
  speed = 1000 / (parseInt(e.target.value) || 1); 
  if (index < text.length) {
    index = 0;                                                   // Reset index
    textElement.textContent = '';                                // Kosongkan teks
    typeText();                                                  // Mulai mengetik ulang
  }
});

// Agar background menjadi foto dan tulisan neon//
document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080')";                         // Ganti background dengan gambar acak
document.body.style.backgroundSize = 'cover';                                                           // Gambar latar menutupi seluruh layar
textElement.style.textShadow = '0 0 10px #fff, 0 0 20px #ff0000, 0 0 30px #ff0000';                 // Efek neon berwarna merah
textElement.style.color = '#fff';                                                                       // Warna teks putih
textElement.style.fontSize = '2.5rem';                                                                  // Ukuran font besar