const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./userModel');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
const atlasConnectionString = 'mongodb+srv://warstander45:comp3123@cluster0.djpgvtv.mongodb.net/w2024_comp3133?retryWrites=true&w=majority';

mongoose.connect(atlasConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// POST API to insert a user document
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
