const db = require('../db');

// Correctly export the function
exports.createProject = async (req, res) => {
    const { title, description, praktikant_id } = req.body;

    try {
        const [result] = await db.query('INSERT INTO Projects (title,description, praktikant_id) VALUES (?, ?, ?)', [
            title, description, praktikant_id
        ]);

        res.status(201).json({ message: 'Project created', projectId:result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

