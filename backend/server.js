const express = require('express');
const cors = require('cors');
const api = require('./api');

const app = express();
app.use(cors());
const port = 3000;

app.use(express.json());

// API endpoint to fetch top clans
app.get('/api/clans', async (req, res) => {
    const locationID = req.query.locationID;
    try {
        const clans = await api.getTopClans(locationID);
        res.json(clans);
        console.log("SERVER PAGE: ", clans);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});