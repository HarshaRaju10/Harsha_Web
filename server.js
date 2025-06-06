const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Connect MongoDB (Compass)
mongoose.connect('mongodb://127.0.0.1:27017/harsha_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

const User = mongoose.model('User', new mongoose.Schema({
  username: { type: String, unique: true },
  password: String
}));

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.findOne({ username });
  if (exists) return res.status(400).send('User already exists');
  const hashed = await bcrypt.hash(password, 10);
  await new User({ username, password: hashed }).save();
  res.send('User registered!');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }
  res.status(200).send('Login successful');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

