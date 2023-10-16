# [1/5] Random Quote Machine

Project ini adalah yang pertama dari lima project yang harus kamu selesaikan dan lolos pengujian untuk meraih sertifikasi [Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/) dari freeCodeCamp!

## Apa itu Palindrome?

Sebuah palindrom adalah kata atau kalimat yang dapat dibaca sama baik dari depan maupun dari belakang, tanpa memperdulikan tanda baca, huruf besar kecil, dan spasi. Misalnya, "kasur rusak" adalah contoh palindrom karena jika dibalik, tetap sama.

## Bagaimana Checker Ini Bekerja

Untuk menentukan apakah sebuah string adalah palindrom, checker ini melakukan hal-hal berikut:

1. **Menghilangkan Karakter Non-Alfanumerik:** Checker ini menghapus semua karakter yang bukan huruf atau angka dari string input. Ini termasuk tanda baca, spasi, dan simbol lainnya.

2. **Menyamakan Huruf Besar atau Kecil:** Semua huruf dalam string diubah menjadi huruf kecil atau huruf besar. Langkah ini memastikan bahwa checker tidak memperhatikan perbedaan huruf besar dan kecil saat memeriksa palindrom.

3. **Pembandingan:** Setelah membersihkan dan memformat string input, checker ini membandingkannya dengan versi terbaliknya. Jika keduanya sama, maka string tersebut dianggap sebagai palindrom; jika tidak, maka bukan.

4. Hasil akan ditampilkan di **console***

## Contoh

Berikut beberapa contoh untuk mengilustrasikan bagaimana checker ini menangani berbagai jenis string:

- "kodok" → Ini adalah palindrom.
- "Katak" → Masih palindrom, karena kita abaikan huruf besar kecil.
- "ibu ratna antar ubi" → Tetap palindrom, kita abaikan spasi.
- "123abcba321" → Ini juga palindrom, karena karakter non-alfanumerik dihapus.
- "2@3a3*2" → Palindrom juga setelah dibersihkan.


## Coding dan Testing

Kamu bisa ngoding dan melakukan testing langsung di [Palindrome Checker project build](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker).  

Jika string yang kamu input itu palindrom maka output di **console** adalah `true`
Jika string yang kamu input itu bukan palindrom maka output di **console** adalah `false`  


Semangat dan selamat mencoba! 🚀📜  


[***Next Project - [2/5] Roman Numeral Converter >>***](https://github.com/dipintoo/freeCodeCamp_Roman-Numeral-Converter/tree/main)
