import React from "react"
import "./../App.css"

const PhotosList = (props) => {
    let handleClick = (e) => {
        props.setCurrentId(e.target.id)
    }

    let arrayPhotos = props.arrayPhotos.map((elem, index) => {
        return (<div className={"imageSmall"}>

            <img className={"img"} onClick={handleClick} id={index} src={elem.urls.small}/>
            <div id={"name"}>
                Name : {elem.alt_description}
            </div>
            <div id={"author"}>
                Author : {elem.user.name}
            </div>

        </div>)
    });


    return (<div className={"main"}>

        <div className={"gallery"}>
            Gallery
        </div>
        <div className={"allImages"}>
            {arrayPhotos}
        </div>
        <div id={"marianDiv"}>Created for Test Task by <span className={"marian"}> &copy;<i>marianelement@gmail.com</i></span>
        </div>

    </div>)
}

export default PhotosList