const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const contactSubmissions = [];

// Endpoint to receive form data
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newSubmission = {
    id: Date.now(),
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  contactSubmissions.push(newSubmission);
  console.log('Received:', newSubmission);

  return res.status(201).json({ message: 'Success' });
});

// Endpoint for Admin Panel to read form data
app.get('/api/contacts', (req, res) => {
  res.json(contactSubmissions);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});