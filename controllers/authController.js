const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

// Register user
exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into DB
        const [result] = await db.query('INSERT INTO Users (name,email, password, role) VALUES (?, ?, ?, ?)', [
            name,
            email,
            hashedPassword,
            role
        ]);

        res.status(201).json({ message: 'User registered', userId:
result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login user
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await db.query('SELECT * FROM Users WHEREemail = ?', [email]);

        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid email orpassword' });
        }

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email orpassword' });
        }

        // Generate JWT
        const token = jwt.sign({ userId: user.id, role: user.role },
process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};