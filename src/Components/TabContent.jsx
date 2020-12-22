import {useState} from "react";
import ForecastDays from "./ForecastDays";
import style from "./TabContent.module.css"

const TabContent = (props) => {

    let sunRise = new Date(props.curWeather.sys.sunrise * 1000).toLocaleTimeString()
    let sunSet = new Date(props.curWeather.sys.sunset * 1000).toLocaleTimeString()

    const [active, setActive] = useState(null);
    const openTab = e => setActive(+e.target.dataset.index);

    return (<div>
        <div>
            <h3><b> {props.curWeather.name}</b></h3>
        </div>
        <div className={style.info}>
            <div className={style.firstColumn}>

                <ul>
                    <li> Temperature:</li>
                    <li> Description:</li>
                    <li> Pressure:</li>
                    <li> Humidity:</li>
                    <li> Wind speed:</li>
                    <li> Sun Rise:</li>
                    <li> Sun Set:</li>
                </ul>
            </div>
            <div className={style.secondColumn}>
                <ul>
                    <li> {Math.round(props.curWeather.main.temp - 273)}°C</li>
                    <li> {props.curWeather.weather[0].description}</li>
                    <li> {props.curWeather.main.pressure}</li>
                    <li> {props.curWeather.main.humidity}</li>
                    <li> {props.curWeather.wind.speed}</li>
                    <li> {sunRise}</li>
                    <li> {sunSet}</li>
                </ul>
            </div>
        </div>

        <div>
            <div className="tab">

                {props.arrayNextDays ? props.arrayNextDays.map((n, i) => (
                    <button
                        className={`tablinks ${i === active ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={i}
                    >{n}</button>
                )) : null}
            </div>
            {props.arrayNextDays[active] && <ForecastDays forecast={props.forecast[active]}/>}
        </div>


    </div>)
}

export default TabContent