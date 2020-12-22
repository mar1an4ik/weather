import React, {useState} from "react"
import style from "./InputContainer.module.css"
import TabContent from "./TabContent";
import "../Common/Tab.css"
import gps from "./../Images/gps.png"

const InputContainer = (props) => {

    const [active, setActive] = useState(null); //active tab
    const openTab = e => setActive(+e.target.dataset.index); //set active tab
    let ref1 = React.createRef(); //ref to textArea(we need to delete value after click)
    let findCity = "";// out value in textarea ,which we send to onClick
    let setFindCity = (elem) => {
        findCity = elem;
    }
    let arrayNextDays = [] //next 7 days
    //get next 7 days
    const initalizeNextDays = () => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        for (let i = 1; i <= 7; i++) {
            var date = new Date();
            date.setDate(date.getDate() + i);
            arrayNextDays.push(days[date.getDay()])
        }
    }
    // handle on "FIND"
    const findCityClicked = () => {
        props.getWeatherCity(findCity)
        setFindCity("");
        ref1.current.value = "";
        setActive(props.curWeather.length)
    }
    // handle on GPS
    const findGPSClicked = () => {
        props.getWeatherGPS();
        setActive(props.curWeather.length)
    }

    initalizeNextDays()  // Lets know what 7 days are next(from today date)

    return (<div className={style.main}>
        <div className={style.options}>

            {/* Input City textarea */}
            <input ref={ref1}
                   className={style.inputCity}
                   onChange={(e) => {
                       setFindCity(e.target.value)
                   }}
                   type={"text"}
                   placeholder={"Enter city"}/>

            {/* find button */}
            <button className={style.findBtn}
                    onClick={findCityClicked}>Find
            </button>

            {/* gps button*/}
            <img onClick={findGPSClicked} className={style.gpsIcon}
                 src={gps}/>
        </div>

        {/* tabs initialize*/}
        <div>
            <div className={"tab"}>

                {props.curWeather.map((n, i) => (
                    <button
                        className={`tablinks ${i === active ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={i}
                    >{n.name}</button>
                ))}
            </div>
            {/* Open active TAB */}
            {props.curWeather[active] && <TabContent curWeather={props.curWeather[active]}
                                                     forecast={props.forecast[active]}
                                                     arrayNextDays={arrayNextDays}/>}
        </div>


    </div>)
}

export default InputContainer