# Aplikasi Visualisasi Grafik Data

- Marchelino Senduk Kaunang (10241040) (100%)
- Adelia Cyntia Renata (10241003) (100%)
- Devina Dian Saputri (10241022) (100%)
- Muhammad Yuspa Ardiansyah (10241052) (100%)

## Pendahuluan
Dengan bantuan grafik, data yang kompleks dan besar dapat disederhanakan menjadi bentuk yang mudah dipahami, seperti diagram batang, grafik garis, pie hart, dan scatter plot. Visualisasi tidak hanya membantu dalam mengenali pola, tren, dan hubungan antar data tetapi juga meningkatkan komunikasi dan pengambilan informasi yang tersedia.
Visualisasi data ada pada ribuan tahun yang lalu, salah satu pelopor visualisasi data adalah william Playfair, seorang ekonom asal skotlandia pada akhir abad ke-18 memperkenalkan grafik batang, grafik garis, dan pie chart sebagai cara untuk menyajikan data ekonomi dan perdagangan. Diabad ke-19, Florence Nightingale menggunakan diagram plar area untuk menunujukkan data statistik kesehatan selama perang krinea, yang kemudian membantu meningkatkan sistem pelayanan kesehatan. Visualisasi data mengacu pada teknik yangdigunakan untuk mengkomunikasi data atau informasi dengan membuatnya sebagai objek visual dalam grafik. Tujuan kami membuat program visualisasi grafik data adalah untuk menyajikan data dalam bentuk visualisasi dan interaktif serta menyederhanakan penyajian informasi secara interaktif dan mudah dimengerti.

## Tinjauan Pustaka
Ceritakan program-program yang serupa dengan program yang kalian buat yang
dibuat oleh orang lain


## Metode Pembuatan
Pada program yang telah kami buat adalah **Aplikasi Visualisasi Grfaik Data** berbasis web yang menggunakan **Chart.js** untuk membuat grafik, serta mendukung import data dari file Excel (.xlsx/.xls) dan pengguna dapat mengekspor grafik ke dalam bentuk PNG atau PDF. Bagian pertama HTML, yaitu head yang berisi judul halaman, pengaturan responsif, serta beberapa library eksternal. Diantaranya ada Chart.js untuk menggambar grafik, SheetJS untuk scan/membaca file excel, dan jsPDF untuk mengekspor grafik ke dalam bentuk file PDF. Pada bagian body, ada judul aplikasi "Visualisasi Grafik Data", ada label dan input file untuk pengguna memasukkan file excel (.xlsx/.xls). Setelah file dimasukkan, pengguna bisa memilih tombol untuk mengekspor grafik dalam bentuk PNG atau PDF. Pada bagian canvas dengan ID **chartCanvas** untuk sebagai tempat Chart.js menampilkan grafik. Grafik yang ditampilkan berdasarkan dari file excel yang di proses oleh JavaScript. Bagian ini kami menggunakan beberapa library seperti:
- **https://cdn.jsdelivr.net/npm/chart.js**
  Chart.js ini merupakan library yang berfungsi untuk membuat grafik, seperti grafik garis, batang, pie, dan lainnya. Chart.js ini digunakan pada elemen canvas dari data yang telah diinputkan.
- **https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js**
  SheetJS atau xlsx.js merupakan library yang berfungsi untuk scan, membaca, memproses, dan konversi data dari file excel (.xlsx/.xls).
- **https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js**
  jsPDF merupakan library yang berfungsi untuk membuat dan mengekspor grafik dari Chart.js lalu mengubahnya menjadi bentuk file PDF.

Pada Bagian tampilan web (css) kami menggunakan font dari Google Fonts yaitu "Poppins" dan kami menggunakan fitur dari CSS3. Latar belakang halaman menggunakan gradasi biru mudah ke putih, judul halaman diberi hijau kebiruan yang kontras. Button untuk "Download PNG" dan "Download PDF" diberi warna hijau toska. Bagian kanvas yang digunakan untuk menampilkan grafik dari Chart.js juga diperindah. Kanvas diberi latar belakang putih dengan sudut yang membulat dan bayangan halus di sekelilingnya. Ini membuat grafik tampak seperti berada di dalam sebuah kartu atau panel, sehingga tampil lebih elegan dan mudah dipisahkan dari latar belakang halaman. Penataan posisi grafik juga diatur menggunakan Flexbox agar tampil tepat di tengah layar.

```js
button {
  ...
  background-color: #009688;
  ...
}
button:hover {
  background-color: #00796b;
}
```

Pada bagian canvas menampilkan grafik diberi warna latar belakang putih.

```js
canvas {
  margin-top: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
```
Ada beberapa library dan Tools yang digunakan:
- Google Fonts
  Digunakan untuk mengimpor dan menerapkan font "Poppins" ke seluruh elemen teks. Ini termasuk ke dalan web typography tool dari google.
- CSS3
  Digunakan untuk mengatur layout, warna, transisi, dan efek.

Pada bagian javascript dibuat sebagai bagian yang dapat membaca file excel, menampilkan dalam bentuk grafik menggunakan Chart.js serta ada fitur mengekspor grafik ke dalam bentuk format PNG maupun dokumen PDF. Proses pertama dari elemen **canvas** yang memiliki ID **chartcanvas** dan menginisialisasi gambar 2D untuk bisa digunakan Chart.js untuk menggambar grafik. Pada variabel chart berfungsi untuk bisa menghapus file yang sebelumnya diinputkan kemudian diinputkan kembali file yang baru agar tidak terjadi duplikat grafik pada saat file excel diinputkan lebih dari satu kali. Lalu kami membuat event listener yang digunakan untuk mengecek pada saat pengguna memilih file lalu menginputkan file (input type="file"), apabila pengguna telah menginputkan file maka **FileReader** yaitu API JavaScript yang berfungsi membaca file lokal yang telah diinputkan oleh pengguna tanpa menyimpan di server. File yang diinputkan di baca pada format **ArrayBuffer** lalu akan di eksekusi oleh SheetJS. Pada event **onload**, kami menggunakan library SheetJS (xlsx.js) berfungsi untuk membaca file excel yang telah diinputkan. Data excel dibaca sebagai **Uint8Array** lalu di konversi menjadi format workbook oleh fungsi **XLSX.read**, lalu dari lembar pertama workbook dipilih kemudian diubah menjadi objek array JSON menggunakan **XLSX.utils.sheet_to_json** dari setiap objek dalam array mewakili satu baris di excel dengan key sebagai kolom. Pada kolom pertama dijadikan sebagai sumbu-X dan kolom kedua dijadikan sebagai sumbu-Y. Kedua array ini, **labels** dan **values** akan dikonversi menjadi grafik. Sebelum membuat grafik, program akan memeriksa atau mengecek apakah sudah ada grafik yang telah dibuat sebelumnya. Jika ada, grafik yang sebelumnya akan di eksekusi oleh fungsi **chart.destroy()**. Lalu library **Chart.js** akan mengeksekusi menggambar grafik batang (type:'bar'). Selanjutnya, kami membuat dua fungsi fitur ekspor yang pertama fungsi **downloadPNG()** yang berfungsi untuk menyimpan gambar grafik dengan format PNG. Fungsi ini memuat elemen **a** dengan mengambil data dari canvas dalam format DataURL, lalu pengguna dapat mengunduhnya dengan nama file **'grafik-excel.png'**. Fungsi yang berikutnya ada fungsi **downloadPDF()** yang menggunakan library **jsPDF**, fungsi **new jsPDF()** ini berfungsi untuk membuat file dokumen PDF kosong, lalu mengambil atau menangkap gambar dari elemen **a** dan menambahkannya ke dalam dokumen menggunakan fungsi **addImage**, lalu PDF dapat diunduh dan disimpan di perangkat dengan nama file **'grafik-excel.pdf'**. Pada bagian Javascript, kami menggunakan beberapa library dan tools seperti berikut:

- FileReader API
  Tools yang telah disediakan oleh Javascript yang berfungsi membaca/menangkap file dari pengguna
- SheetJS (XLSX.js)
  Library ini berfungsi untuk melakukan proses file excel dan mengkonversinya menjadi data JSON.
- Chart.js
  Library yang digunakan untuk mengambil dan membuat grafik dari data excel.
- jsPDF
  Tools yang berfungsi untuk mengekspor grafik ke dalam bentuk dokumen PDF.

## Hasil Program
Sertakan gambar, diagram, atau link videos.
Sertakan ulasan selama proses pembuatan. Misal ada tidaknya
fitur yang bisa diselesaikan di dalam program.

Dapat juga menyertakan tautan video demonstrasi penggunaan atau peng-operasian
program yang kalian buat.

## Kesimpulan
Ceritakan hal-hal yang dapat kalian pelajari selama proses pembuatan program tersebut.
Kekurangan, kelebihan, dan rencana tahapan apabila program dilanjutkan

## Daftar pustaka
- <div id="div_ref1"> 
    https://en.wikipedia.org/wiki/William_Playfair. Diakses tanggal 29 Mei 2025.
  </div>

- <div id="div_ref2"> 
    https://id.wikipedia.org/wiki/Visualisasi_data. Diakses tanggal 29 Mei 2025.
  </div>
