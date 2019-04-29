import React from 'react';
import {Form, Row, Col, Button } from 'react-bootstrap';

class CheckInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="m-1 p-5 ">
            <Form>
                <Form.Group controlId="formGroupConfirmationNumber">
                    <Form.Label>Confirmation Number</Form.Label>
                    <Form.Control type="emtext" placeholder="Enter Confirmation Number" />
                </Form.Group>
                <Form.Group controlId="formGroupName">
                    
                    <Form.Label>Enter your First and Last name</Form.Label>
                
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Button className="mt-2 w-100" >Main Page</Button>
                    </Col>
                    <Col>
                        <Button className="mt-2 w-100" >Submit form</Button>
                    </Col>
                </Form.Group>
            </Form>
            </div>
        );
    }
}

export default CheckInComponent;