const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;
const db = new sqlite3.Database('users.db');

app.use(cors());
app.use(express.json());

// Middleware to handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Registration endpoint
app.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if the username or email already exists
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    const existingEmail = await getUserByEmail(email);
    if (existingEmail) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store hashedPassword in the database
    db.run(
      'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
      [username, hashedPassword, email],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json({ success: true });
      }
    );
  } catch (err) {
    next(err);
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Retrieve hashedPassword and id from the database based on the username
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the entered password with the hashedPassword
    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (passwordsMatch) {
      // Login successful
      res.json({ success: true, id: user.id });
    } else {
      // Invalid credentials
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    next(err);
  }
});

// Function to get user by username from the database
function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

// Function to get user by email from the database
function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});