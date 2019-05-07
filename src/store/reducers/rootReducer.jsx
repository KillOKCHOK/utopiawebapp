import authReducer from './authReducer';
import flightsReducer from './flightsReducer';
import testFormValid from './formValidationReducers';
import airportReducer from './airportReducers.js';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    flights:flightsReducer,
    testvalid:testFormValid,
    airReduc:airportReducer
})


export default rootReducer;