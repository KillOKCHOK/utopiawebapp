
import axios from 'axios';

export const listAirports=(param)=>{
    return(dispatch, getState)=>{
        axios
        .get('https://fqndkbn9sk.execute-api.us-east-1.amazonaws.com/dev/airports?name='+param)//+param
        .then(response => {
            dispatch({type:"ListAirports",airportList:response.data});
            // console.log({'response.data':response.data, param:param});
        })
        .catch(err=>{
            // console.log({err:err,param:param});
        });
        
    }
}

export const changeTripType = (param) => {
    return {type:'changeTripType',
            oneWay:param}
}

