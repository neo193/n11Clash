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

const getTopClans = async (locationID) => {
    console.log(locationID);
    try {
        console.log(`/locations/${locationID}/rankings/clans`)
        const response = await axiosInstance.get(`/locations/${locationID}/rankings/clans`);
        const { items } = response.data;

        const topClans = items.map(item => ({
            rank: item.rank,
            name: item.name,
            badge: item.badgeUrls.medium,
            clanPoints: item.clanPoints,
        }));

        return topClans.slice(0, 10);
    } catch (error) {
        console.error("Error fetching top clans:", error);
        throw error;
    }
};

module.exports = {
    getTopClans,
};