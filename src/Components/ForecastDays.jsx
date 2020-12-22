import style from "./ForecastDays.module.css"

const ForecastDays = (props) => {
    console.log(props)
    return (<div className={style.info}>
        <div className={style.firstColumn}>
            <ul>
                <li> Day temperature:</li>
                <li> Night temperature:</li>
                <li> Morning temperature:</li>
                <li> Description:</li>
                <li> Pressure:</li>
                <li> humidity:</li>
                <li> Wind speed:</li>
            </ul>

        </div>
        <div className={style.secondColumn}>
            <ul>
                <li> {Math.round(props.forecast.temp.day - 273)}°C</li>
                <li> {Math.round(props.forecast.temp.night - 273)}°C</li>
                <li> {Math.round(props.forecast.temp.morn - 273)}°C</li>
                <li> {props.forecast.weather[0].description}</li>
                <li> {props.forecast.pressure}</li>
                <li> {props.forecast.humidity}</li>
                <li> {props.forecast.wind_speed}</li>
            </ul>

        </div>
    </div>)
}
export default ForecastDays