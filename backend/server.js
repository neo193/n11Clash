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
    let dir = ''
    let marker = ''
    if (req.query.direction) {
        dir = req.query.direction;
        marker = req.query.marker;
    }
    try {
        const clans = await api.getTopClans(locationID, dir, marker);
        res.json(clans);
        console.log("Top Clans: ", clans);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/players', async (req, res) => {
    const locationID = req.query.locationID;
    let dir = ''
    let marker = ''
    if (req.query.direction) {
        dir = req.query.direction;
        marker = req.query.marker;
    }
    try {
        const players = await api.getTopPlayers(locationID, dir, marker);
        res.json(players);
        console.log("Top Players: ", players);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/clan', async (req, res) => {
    const clantag = req.query.clantag;
    try {
        const claninfo = await api.getClanInfo(clantag);
        res.json(claninfo);
        console.log('Clan Info', claninfo)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get('/api/player', async (req, res) => {
    const playertag = req.query.playertag;
    try {
        const playerinfo = await api.getPlayerInfo(playertag);
        res.json(playerinfo);
        console.log('Player Info', playerinfo)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});