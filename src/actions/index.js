import axios from 'axios';
// Pull API key in from .env variable 
const myKey = process.env.API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${myKey}`;

// KEEP ACTION TYPES CONSISTANT
export const FETCH_WEATHER = 'FETCH_WEATHER';

// fetch weather action creator
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
