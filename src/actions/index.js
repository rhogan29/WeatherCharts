import axios from 'axios';
// Pull API key in from .env variable 
const myKey = "302fa4cddaa82981f8126972789c1aa7";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${myKey}`;

// KEEP ACTION TYPES CONSISTANT
export const FETCH_WEATHER = 'FETCH_WEATHER';

// fetch weather action creator
// pass in the searched city 
export function fetchWeather(city) {
    // url will pass in the root url and the passed in city. 
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
