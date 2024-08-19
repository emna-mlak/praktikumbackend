const express = require('express');
const dotenv = require('dotenv');

// Import routes
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const progressRoutes = require('./routes/progressRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

// Load environment variables
dotenv.config();

const app = express();

app.use(express.json());

// Use the routes
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);
app.use('/progress', progressRoutes);
app.use('/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});