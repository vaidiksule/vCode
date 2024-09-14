const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: 'http://localhost:5173', // React frontend URL
  methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));;


app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/formdata')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define a schema and model for the form data
const formDataSchema = new mongoose.Schema({
  name: String,
  contact: String,
  event: String,
  date: String,
  location: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

// Routes
app.post('/api/submit', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json(formData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/formdata', async (req, res) => {
  try {
    const data = await FormData.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
