
const initState = {
    // user:{
    //     loggedIn:false,
    // }
    airportList:[]
}


const airportReducer = (state=initState,action) => {
    if(action.type==='ListAirports'){
        // console.log('LOGIN_Action');
        return{
            ...state,
            airportList:action.airportList
        }
    }
    else return state;
}

export default airportReducer;