import React from "react"
import {api} from "../Api/api";

let initialState = {
    curWeather: [],
    forecast:[],
};


const WeatherReducer = (state = initialState, action) => {

    switch (action.type) {
        case "setWeather": {
            let statecopy = {...state};
            statecopy.curWeather = [...state.curWeather]
            statecopy.curWeather.push(action.curWeather)

            return statecopy;
        }
        case "setForecast": {
            let statecopy = {...state};
            statecopy.forecast = [...state.forecast]
            statecopy.forecast.push(action.forecast)
            debugger
            return statecopy;
        }
        default: {
            return state;
        }
    }
};

export const setWeather = (curWeather) => {

    return {
        type: "setWeather",
        curWeather: curWeather,
    }
};
export const setForecast = (forecast) => {

    return {
        type: "setForecast",
        forecast: forecast,
    }
};

export const getCurrentWeatherCityThunk = (city) => (dispatch) => {

    return api.getCurWeatherCity(city).then((response) => {
        dispatch(setWeather(response))
        api.setForecast(response.coord.lat,response.coord.lon).then((response2)=>{dispatch(setForecast(response2))})

    })
};
export const getCurrentWeatherGPSThunk = (lat,lon) => (dispatch) => {

    return api.getCurWeatherGPS(lat,lon).then((response) => {

        dispatch(setWeather(response))
        api.setForecast(lat,lon).then((response2)=>{dispatch(setForecast(response2))})
    })
};



export default WeatherReducer;