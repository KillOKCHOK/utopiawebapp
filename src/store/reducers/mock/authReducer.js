
const initState = {
    user:{
        loggedIn:false,
    }
}

const authReducer = (state=initState,action) => {
    if(action.type==='LOGIN'){
        // console.log('LOGIN_Action');
        return{
            ...state,
            user:action.user
        }
    }
    
    else if(action.type==='LOGOUT')
    // {console.log('LOGIN_Action');
    return{
        ...state,
        user:action.user
    }
    else return state;
}


export default authReducer;