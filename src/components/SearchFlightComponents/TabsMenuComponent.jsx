
import React from 'react'
// import Sonnet from '../test/Sonnet';
import SearchFlightForm from './SearchFlightForm';
import {Tabs, Tab} from "react-bootstrap";
import CancelComponent from "../CancelFlight/CancelComponent";
import CheckInComponent from "../CheckIn/CheckInComponent";


class TabsMenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div >
            <br/>
                <Tabs defaultActiveKey="book" transition={false} >
                    <Tab eventKey="book" title="Book">
                        <SearchFlightForm />
                    </Tab>
                    <Tab eventKey="CheckIn" title="CheckIn">
                        <CheckInComponent/>
                    </Tab>
                    <Tab eventKey="booking" title="Cancel Booking" >
                        <CancelComponent />
                    </Tab>
                    
                </Tabs>
                <br/>
            </div>
        );
    }
}

export default TabsMenuComponent;