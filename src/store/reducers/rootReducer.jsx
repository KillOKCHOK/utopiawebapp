import authReducer from './mock/authReducer';
import testFormValid from './mock/formValidationReducers';
import searchFlightReducer from './searchFlightsReducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    testvalid:testFormValid,
    searchFlightReducer:searchFlightReducer,
})


export default rootReducer;