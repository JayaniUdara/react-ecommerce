const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
const mysql = require('mysql');

app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from this origin
}));
 
const port = 3001; // Choose any port you prefer

// Middleware to parse JSON bodies
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dp'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

// Create a route to handle registration
app.post('/register', (req, res) => {
  const { name, email, phone, address, password } = req.body;
  // Perform necessary validation

  const sql = `INSERT INTO customer (name, email, phone, address, password) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [name, email, phone, address, password], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error registering user' });
    } else {
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
});

// Create a route to fetch products from the database
app.get('/products', (req, res) => {
  const sql = `SELECT * FROM products`;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching products' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
