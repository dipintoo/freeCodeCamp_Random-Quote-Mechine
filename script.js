// Daftar warna yang akan digunakan untuk mengubah tampilan latar belakang dan teks.
const colors = [
  "#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224",
  "#472E32", "#BDBB99", "#77B1A9", "#73A857"
];

// Variabel untuk menyimpan kutipan dan pengarang saat ini.
let currentQuote = "";
let currentAuthor = "";

// Fungsi untuk mengambil kutipan dari sumber eksternal menggunakan `fetch`.
const getQuotes = async () => {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch quotes");
  }
};

// Fungsi untuk mendapatkan kutipan acak dari data yang diperoleh.
const getRandomQuote = (quotesData) => {
  return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
};

// Fungsi untuk mengubah tampilan halaman dengan animasi.
const getQuote = async () => {
  const quotesData = getQuotes();
  quotesData.then((data) => {
    let randomQuote = getRandomQuote(data);
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

    // Mengubah tautan tombol Twitter untuk membagikan kutipan saat ini.
    $("#tweet-quote").attr(
      "href",
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );

    // Animasi untuk menghilangkan dan menampilkan kembali teks kutipan.
    $(".quote-text").animate({ opacity: 0 }, 500, function() {
      $(this).animate({ opacity: 1 }, 500);
      $("#text").text(randomQuote.quote);
    });

    // Animasi untuk menghilangkan dan menampilkan kembali nama pengarang kutipan.
    $(".quote-author").animate({ opacity: 0 }, 500, function() {
      $(this).animate({ opacity: 1 }, 500);
      $("#author").text(randomQuote.author);
    });

    // Mengubah latar belakang dan warna teks dengan animasi.
    const color = Math.floor(Math.random() * colors.length);
    $("html body").animate(
      {
        backgroundColor: colors[color],
        color: colors[color]
      },
      1000
    );

    // Mengubah warna latar belakang tombol dengan animasi.
    $(".button").animate(
      {
        backgroundColor: colors[color]
      },
      1000
    );
  });
};

// Menjalankan fungsi `getQuote` saat dokumen HTML selesai dimuat.
$(document).ready(() => {
  getQuote();
  // Mengaitkan fungsi `getQuote` dengan tombol "new-quote" agar dipanggil saat tombol tersebut diklik.
  $("#new-quote").on("click", getQuote);
});