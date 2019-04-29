import React from 'react'
import BookingFormComponent from './BookingFormComponent'




class BookingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="pageBaseComponent searchFlightPanel  w-75 mx-1 px-5 ">
                <BookingFormComponent />
            </div>
        );
    }
}

export default BookingComponent;