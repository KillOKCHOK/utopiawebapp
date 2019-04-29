
const initState = {
    flights:[
        {from:"Chicago",to:"Boston",plane:"Bping 747"},
        {from:"NY",to:"Boston",plane:"Bping 747"},
        {from:"DC",to:"Colorado",plane:"AN 225"},
        {from:"Seatle",to:"Boston",plane:"A 327"},
        {from:"Chicago",to:"DC",plane:"Bping 747"},
    ],
}

const rootReducer = (state=initState,action) => {
    return state;
}


export default rootReducer;