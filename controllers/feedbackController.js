const db = require('../db');

// Add feedback
exports.addFeedback = async (req, res) => {
    const { project_id, mentor_id, feedback_text, rating } = req.body;

    try {
        const [result] = await db.query(
            'INSERT INTO Feedback (project_id, mentor_id,feedback_text, rating) VALUES (?, ?, ?, ?)',
            [project_id, mentor_id, feedback_text, rating]
        );

        res.status(201).json({ message: 'Feedback added', feedbackId:result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
