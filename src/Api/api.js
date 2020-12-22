import * as axios from "axios";

const ACCESS_KEY = "?APPID=d951923c19e1f20280a668a0cce67fcb";


const instance = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5",
});

export const api = {

    getCurWeatherCity(city) {
        return instance.get(`/weather` + ACCESS_KEY+"&q="+city).then((response) => {

            return response.data
        });},
    getCurWeatherGPS(lat,lon) {
        return instance.get(`/weather`+ACCESS_KEY+"&lat="+lat+"&lon="+lon).then((response) => {

            return response.data
        });},
    setForecast(lat,lon) {
        return instance.get(`/onecall`+ACCESS_KEY+"&lat="+lat+"&lon="+lon).then((response) => {

            return response.data.daily
        });},

};