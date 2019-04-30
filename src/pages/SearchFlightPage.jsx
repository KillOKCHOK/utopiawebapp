import React from 'react';
import SearchFlightComponent from '../components/SearchFlightComponents/SearchFlightComponent';

let SearchFlightPage = (props) =>{
    console.log("Main Page");
    return(
        <div className="my-3 ">
            <SearchFlightComponent/>
        </div>
    );

}
export default SearchFlightPage;
