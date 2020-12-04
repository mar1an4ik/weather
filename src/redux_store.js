import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import PhotosReducer from "./Components/PhotosReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    photosTree: PhotosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


export default store;