import {useEffect, useState} from "react";
import FullPhoto from "./FullPhoto";
import React from "react"
import PhotosList from "./PhotosList";


const Main = (props) => {
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.setPhotosThunk(); // InitializeThunk
    }, [])

    return (
        currentId
            ? <FullPhoto setCurrentId={setCurrentId}
                         arrayPhotos={props.arrayPhotos}
                         currentId={currentId}/>
            : <PhotosList setCurrentId={setCurrentId}
                          arrayPhotos={props.arrayPhotos}/>
    )
}


export default Main