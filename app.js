const express = require('express');
const path = require('path');
const app = express();

// Menggunakan middleware untuk berkas statis
app.use(express.static(path.join(__dirname, 'public')));

// Mengatur mesin template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Menentukan rute untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });

// Menjalankan server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});