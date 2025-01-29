const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Signup Endpoint/
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err) => {
    if (err) {
      console.error('Error:', err);
      res.json({ success: false, message: 'Signup failed' });
    } else {
      res.json({ success: true });
    }
  });
});

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err || results.length === 0) {
      res.json({ success: false, message: 'Invalid credentials' });
    } else {
      res.json({ success: true });
    }
  });
});

// Forgot Password Endpoint
app.post('/api/forgot-password', (req, res) => {
  const { email } = req.body;
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error:', err);
      res.json({ success: false, message: 'An error occurred. Please try again.' });
    } else if (results.length === 0) {
      res.json({ success: false, message: 'Email not found' });
    } else {
      // Simulating password reset email sending
      console.log(`Password reset email sent to ${email}`);
      res.json({ success: true, message: 'Password reset email sent. Please check your inbox.' });
    }
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
