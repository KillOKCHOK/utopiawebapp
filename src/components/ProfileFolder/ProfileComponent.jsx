import React from 'react';
import {Container} from 'react-bootstrap';
import FormExample from './FormExample';

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        return (
            <div className="pageBaseComponent searchFlightPanel  mx-1 px-5 ">
                <div className=" m-1 p-5 ">
                <Container>
                    <br></br>
                    <FormExample></FormExample>
                    </Container>

                </div>
            </div>
        );
        
    }
}

export default ProfileComponent;