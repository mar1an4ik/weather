import React from "react"
import Main from "./Main";
import {connect} from "react-redux";
import {setPhotosThunk} from "./PhotosReducer";

let stateGo = (state) => {
    return {
        arrayPhotos: state.photosTree.photos,
    }
};

const MainContainer = connect(stateGo, {setPhotosThunk})(Main);


export default MainContainer