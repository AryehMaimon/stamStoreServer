const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();


const User = require('../DL/models/user.model');

const SECRET_KEY = process.env.JWT_SECRET 

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
console.log('login',req.body);

  try {
    // כאן תבוא הלוגיקה לאימות המשתמש
    // לדוגמה:
    const user = await User.findOne({ email });
    console.log('r1',user);
    
    if (!user || !user.comparePassword(password)) {
     console.log('Authentication failed');
     
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // אם האימות הצליח, צור טוקן
    const token = jwt.sign(
      { userId: user._id, username: user.name },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
  
});

module.exports = router;