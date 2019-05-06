import authReducer from './authReducer';
import flightsReducer from './flightsReducer';
import testFormValid from './formValidationReducers';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    flights:flightsReducer,
    testvalid:testFormValid,
})


export default rootReducer;