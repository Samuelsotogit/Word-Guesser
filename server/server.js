const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());
const PORT = 8080;

const words = ['banana', 'car', 'toy', 'school', 'cloud']

// Serve static files from express server
app.use(express.static(path.join(__dirname, '..','client')));

// Fetch random word from 
app.get('/api/random-word', async (req, res) => {
    try {
        const response = await fetch("https://random-word-api.vercel.app/api?words=3")
        const data = await response.json();
        if (data && data.length > 0) {
            res.json({ word: data[0]});
        }
    } catch (err) {
        console.error("Failed to fetch random word", err);
        res.status(500).json({ error: "Failed to fetch random word"});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on at http://localhost:${PORT}`)
});