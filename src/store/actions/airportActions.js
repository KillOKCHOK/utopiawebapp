
import axios from 'axios';

export const listAirports=(param)=>{
    return(dispatch, getState)=>{
        //async call
        axios
        .get('https://fqndkbn9sk.execute-api.us-east-1.amazonaws.com/dev/airports?name=bos')//+param
        .then(response => {
            console.log(response);
            dispatch({type:"ListAirports",airportList:response})});
        
    }
}