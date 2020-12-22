import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import WeatherReducer from "./WeatherReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    weatherTree: WeatherReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


export default store;