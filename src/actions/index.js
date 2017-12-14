import axios from 'axios';

const API_KEY = 'dc7832a908765fc7d2f7e789e65a81fd';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ru`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		request: request
	}
}