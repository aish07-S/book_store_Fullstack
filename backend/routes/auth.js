const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../config/db'); 

const router = express.Router();


router.post('/register', async (req, res) => {
  
    const { email, phoneNumber, password } = req.body;

    if (!email || !phoneNumber || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
      
        const [existingUser] = await db.execute('SELECT email FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ msg: 'User with this email already exists' });
        }

        // 4. Hashinf the password
        const salt = await bcrypt.genSalt(10); // Generate variabke
        const hashedPassword = await bcrypt.hash(password, salt); // call salt variabke

        // 5. Insert the new user into the database
        const sql = 'INSERT INTO users (email, phone_number, password) VALUES (?, ?, ?)';
        await db.execute(sql, [email, phoneNumber, hashedPassword]);

        // 6. Send a success txt
        res.status(201).json({ msg: 'User registered successfully!' });

    } catch (err) {
        console.error('SERVER ERROR:', err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;