
const express = require('express');
const mysql = require('mysql2'); // Ganti dari 'mysql' ke 'mysql2'
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// URL Koneksi MySQL dari Railway
const dbURL = 'mysql://root:EcxAFLawCOUPHGQ1uvCe@containers-us-west-182.railway.app:6388/railway';

// Konfigurasi koneksi ke database di Railway
const db = mysql.createConnection({
  host: 'containers-us-west-182.railway.app',
  user: 'root',
  password: 'EcxAFLawCOUPHGQ1uvCe',
  port: 6388,
  database: 'railway'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.use(express.json());

// Menggunakan middleware untuk berkas statis
app.use(express.static(path.join(__dirname, 'public')));

// Menentukan rute untuk halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Endpoint untuk membuat data baru
app.post('/createItem', (req, res) => {
  const name = req.body.name;

  const sql = 'INSERT INTO items (name) VALUES (?)';
  db.query(sql, [name], (err, result) => {
    if (err) {
      console.error('Error creating item:', err);
      res.status(500).json({ message: 'Error creating item' });
    } else {
      const newItem = { id: result.insertId, name: name };
      res.status(201).json(newItem);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
