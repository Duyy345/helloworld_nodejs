const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 443;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST requests to /api
app.post('/api', (req, res) => {
    const { text } = req.body; // Use req.body for POST request data
    console.log(text);
    res.json({ received: text }); // Send a JSON response
});

// Serve the index.html file for GET requests to /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
