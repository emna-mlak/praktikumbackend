const db = require('../db');

// Add a progress update
exports.addProgressUpdate = async (req, res) => {
    const { project_id, update_description, progress_percentage } = req.body;

    try {
        const [result] = await db.query(
            'INSERT INTO ProgressUpdates (project_id,update_description, progress_percentage) VALUES (?, ?, ?)',
            [project_id, update_description, progress_percentage]
        );

        res.status(201).json({ message: 'Progress update added',progressUpdateId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};