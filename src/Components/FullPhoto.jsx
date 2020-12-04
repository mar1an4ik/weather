import React, {useState} from "react"
import "./../App.css"
import backButton from "../Images/backButton.png"

const FullPhoto = (props) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    window.onresize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return (<div>
        <img src={backButton}
             id={"backButton"} onClick={() => props.setCurrentId(0)}/>

        <img width={width}
             height={height}
             src={props.arrayPhotos[props.currentId].urls.full}>

        </img>
    </div>)
}

export default FullPhoto