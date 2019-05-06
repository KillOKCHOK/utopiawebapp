import React from 'react';
// import ProfileComponent from '../components/ProfileFolder/ProfileComponent';
import FormToTry from './FormToTry';


let pageToTry = (props) =>{
    // console.log(props);
    return(
        <div className="my-3 ">
            <br></br>
           <FormToTry validated={false} {...props}/> 
        </div>
    );

}
export default pageToTry;