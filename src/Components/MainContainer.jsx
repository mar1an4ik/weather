import React from "react"
import {connect} from "react-redux";
import {
    getCurrentWeatherCityThunk,
    getCurrentWeatherGPSThunk,
} from "../Redux/WeatherReducer";
import InputContainer from "./InputContainer";


const Main = (props) => {

    let getWeatherGPS = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            props.getCurrentWeatherGPSThunk(position.coords.latitude, position.coords.longitude)
        }, () => {
            alert("You didnt allow gps")
        });
    } // get GPS location and initialize

    let getWeatherCity = (city) => {
        props.getCurrentWeatherCityThunk(city)
    } // get weather api with city.name

    return (<InputContainer getWeatherCity={getWeatherCity}
                            curWeather={props.curWeather}
                            getWeatherGPS={getWeatherGPS}
                            forecast={props.forecast}/>
    )
}


let stateGo = (state) => {
    return {
        curWeather: state.weatherTree.curWeather,
        forecast: state.weatherTree.forecast
    }
};

const MainContainer = connect(stateGo, {getCurrentWeatherCityThunk, getCurrentWeatherGPSThunk})(Main);


export default MainContainer