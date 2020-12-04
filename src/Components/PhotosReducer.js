import React from "react"
import {api} from "../Api/api";

let initialState = {
    photos: [],
};


const PhotosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setPhotos": {
            let statecopy = {...state};
            statecopy.photos = [...state.photos]
            statecopy.photos = action.arrayPhotos
            return statecopy;
        }
        default: {
            return state;
        }
    }
};

export const setPhotos = (arrayPhotos) => {
    return {
        type: "setPhotos",
        arrayPhotos: arrayPhotos,
    }
};

export const setPhotosThunk = () => (dispatch) => {
    return api.getPhotos().then((response) => {
        dispatch(setPhotos(response))  //get from api and set to REDUX
    })

};


export default PhotosReducer;