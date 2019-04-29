import React from 'react';

import {connect} from 'react-redux';
import FlightListComponent from '../components/FlightsListComponent/FlightListComponent';

const queryString = require('query-string');

class FlightListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        // console.log('===========================');
        // console.log(this.props.location.search);
        // console.log(this.props.flights);
    }
    render(){
        var parsed = queryString.parse(this.props.location.search);
        console.log(parsed.param); // replace param with your own searchFlightInfo and drop as props to api call
        console.log(parsed.date); // replace param with your own searchFlightInfo and drop as props to api call

    return(
        
        <div className="my-3 ">
            <FlightListComponent flights={this.props.flights}/>
        </div>
    );
    }

    
}

const mapStateToProps = (state) => {
    return {
        flights: state.flights,
    }
}
export default connect(mapStateToProps)(FlightListPage);