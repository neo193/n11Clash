const axios = require('axios');
require('dotenv').config();

const baseURL = "https://api.clashofclans.com/v1/"
const APIKEY = process.env.VITE_API_KEY


const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        ...(APIKEY && { 'Authorization': `Bearer ${APIKEY}` }),
    },
});

const getTopClans = async (locationID, dir, marker) => {
    try {
        let endpoint = `/locations/${locationID}/rankings/clans`
        if (dir === '') {
            endpoint += '?limit=10'
        } else {
            endpoint += `?limit=10&${dir}=${marker}`
        }
        const response = await axiosInstance.get(endpoint);
        const { items } = response.data;
        const { cursors } = response.data.paging;

        const topClans = items.map(item => ({
            rank: item.rank,
            name: item.name,
            badge: item.badgeUrls.medium,
            clanPoints: item.clanPoints,
        }));

        const returnArray = [...topClans, cursors]

        return returnArray;
    } catch (error) {
        console.error("Error fetching top clans:", error);
        throw error;
    }
};

const getTopPlayers = async (locationID, dir, marker) => {
    try {
        let endpoint = `/locations/${locationID}/rankings/players`
        if (dir === '') {
            endpoint += '?limit=10'
        } else {
            endpoint += `?limit=10&${dir}=${marker}`
        }
        const response = await axiosInstance.get(endpoint);
        const { items } = response.data;
        const { cursors } = response.data.paging;

        const topPlayers = items.map(item => ({
            rank: item.rank,
            name: item.name,
            badge: item.league.iconUrls.medium,
            trophies: item.trophies,
            clan: item.clan.name,
        }));

        const returnArray = [...topPlayers, cursors]

        return returnArray;
    } catch (error) {
        console.error("Error fetching top players:", error);
        throw error;
    }
}

const getTopCapitals = async (locationID, dir, marker) => {
    try {
        let endpoint = `/locations/${locationID}/rankings/capitals`
        if (dir === '') {
            endpoint += '?limit=10'
        } else {
            endpoint += `?limit=10&${dir}=${marker}`
        }
        const response = await axiosInstance.get(endpoint);
        const { items } = response.data;
        const { cursors } = response.data.paging;

        const topClans = items.map(item => ({
            rank: item.rank,
            name: item.name,
            badge: item.badgeUrls.medium,
            clanPoints: item.clanCapitalPoints,
        }));

        const returnArray = [...topClans, cursors]

        return returnArray;
    } catch (error) {
        console.error("Error fetching top capitals:", error);
        throw error;
    }
}

const getClanInfo = async (clantag) => {
    console.log(`/clans/${clantag}`)
    try {
        const response = await axiosInstance.get(`/clans/%23${clantag}`)
        const items = response.data;

        const clanInfo = {
            name: items.name,
            description: items.description,
            badge: items.badgeUrls.medium,
            members: items.members,
        }

        return clanInfo;
    } catch (error) {
        console.error("Error fetching top players:", error);
        throw error;
    }
}

const getPlayerInfo = async (playertag) => {
    console.log(`/players/${playertag}`)
    try {
        const formatRole = s => {
            if (s === 'member') {
                var formattedRole = "Member"
            } else if (s === 'admin') {
                formattedRole = "Elder"
            } else if (s === 'coLeader') {
                formattedRole = "Co-Leader"
            } else if (s === 'leader') {
                formattedRole = "Leader"
            }
            return formattedRole
        }

        const response = await axiosInstance.get(`/players/%23${playertag}`)
        const items = response.data;

        if (items.role) {
            var role = formatRole(items.role)
            var clanName = items.clan.name
        } else {
            role = ""
            clanName = "Not in a Clan"
        }

        const playerInfo = {
            name: items.name,
            tag: items.tag,
            thLevel: items.townHallLevel,
            expLevel: items.expLevel,
            role: role,
            clanName: clanName
        }

        return playerInfo;
    } catch (error) {
        console.error("Error fetching top players:", error);
        throw error;
    }
}

module.exports = {
    getTopClans,
    getTopPlayers,
    getClanInfo,
    getPlayerInfo,
    getTopCapitals
};