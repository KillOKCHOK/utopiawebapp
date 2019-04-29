import React from 'react';

import {Form,Col,Button,Row} from "react-bootstrap";

let SearchFlightForm = (props) =>{

    return(
        <div>
        <Form>
        <br/>
            <Form.Row>
                <Form.Group as={Row}>
                        <Form.Check
                        className="px-4"
                        inline
                        type="radio"
                        label="One-way"
                        defaultChecked={true}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        inline
                        type="radio"
                        label="Roundtrip"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>From</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>To</Form.Label>
                    <Form.Control ></Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label>Dates*</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Travelers</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} >
                    <Form.Label>Travelers</Form.Label>
                    <Form.Control as="select">
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business or First</option>
                        
                    </Form.Control>
            </Form.Group>
            <Form.Group as={Col} >
                <br/>
                <Button type="submit" className="mt-2 w-100" >Submit form</Button>
            </Form.Group>
            </Form.Row>
            
        </Form>

        </div>
    );

}
export default SearchFlightForm;

