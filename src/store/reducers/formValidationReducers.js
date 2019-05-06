const initState = {
testValidation: {validated:false},
}

const testValidReducer = (state=initState,action) => {
        if(action.type==='testvalidation'){
            return{
                ...state,
                testValidation:{ validated: action.testValidation.validated.validated }
            }
        }
    else return {...state};
}

export default testValidReducer;