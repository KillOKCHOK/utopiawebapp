import React from 'react';
import {Form,Col,Button,Row} from "react-bootstrap";
import {connect} from "react-redux";
import{login,logout} from '../../store/actions/mockLoginAction';
import{testvalidation} from '../../store/actions/formValidationActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {listAirports} from '../../store/actions/airportActions'


class SearchFlightForm extends React.Component {

    oneWayTripType = false;

    componentDidMount=()=>{
        this.oneWayTripType = document.getElementById('formHorizontalRadios1').checked;
        
        // console.log("!!!!!!!!!!!!!!!!"+JSON.stringify(this.oneWayTripType));
    }
    
    handleDateChange=(e)=>{
        this.props.listAirports("bos");
        console.log(this.props.fromAirport);
        console.log(Date(e));
    }

    tripTypeChange = () => {
        console.log(document.getElementById('formHorizontalRadios1').checked);
        this.oneWayTripType = document.getElementById('formHorizontalRadios1').checked;
        return null;
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        // alert(form.formOneOrRoundId);
        // console.log(form.formHorizontalRadios.checked);
        // console.log(form.formHorizontalRadios1.checked);
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        //   this.props.testvalidate({ validated: true });
        }else{
          event.preventDefault();
          event.stopPropagation();
          let fromCity = form.formGridCity1.value;
          let toCity = form.toGridCity2.value;
          this.oneWayTripType = form.formHorizontalRadios1.checked;
          
        //   user.fname = event.currentTarget.validationCustom01.value;
        //   user.lname = event.currentTarget.validationCustom02.value;
        //   user.username = event.currentTarget.validationCustomUsername.value;
        //   this.props.history.push('/flights');
        //   this.props.testvalidate({ validated: false });
      }
  };

  render(){

    return(
        <Form
            noValidate
            validated={true}
            onSubmit={e => this.handleSubmit(e)}>
        <br/>
                <Form.Group as={Row} controlId="formOneOrRoundId">
                        {/* <Form.Label>One-way</Form.Label> */}
                        {/* <Form.Control as="checkbox"></Form.Control> */}
                        <Form.Check onClick={e=>this.tripTypeChange(e)}
                        className="px-4"
                        inline
                        type="radio"
                        label="One-way"
                        defaultChecked={true}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check onClick={e=>this.tripTypeChange(e)}
                        inline
                        type="radio"
                        label="Roundtrip"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        
                </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity1">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city or airport.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="toGridCity2">
                <Form.Label>From</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city or airport.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            {/* https://reactdatepicker.com/#example-7 react-datepicker docs */}
                {this.oneWayTripType?
                (<Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridDate">
                        <Form.Label >Flight Date</Form.Label>
                        <br/>
                        <DatePicker className="text-center form-control mydatepickerClass"
                            selected={new Date()}
                            onChange={this.handleDateChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formGridCity">
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
                </Form.Row>)
                :
                (<Form.Row>
                <Form.Group as={Col} md="3" controlId="formGridDate">
                    <Form.Label className="px-2 pr-3">Flight #1</Form.Label>
                    <DatePicker className="form-control mydatepickerClass"
                            selected={new Date()}
                            onChange={this.handleDateChange}
                            required
                        />
                    <Form.Control.Feedback type="invalid">
                        Please provide flight date.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="formGridDate">
                    <Form.Label className="px-2 pr-3">Flight #2</Form.Label>
                    <DatePicker className=" form-control mydatepickerClass"
                            selected={new Date()}
                            onChange={this.handleDateChange}
                            required
                        />
                    <Form.Control.Feedback type="invalid">
                        Please provide flight date.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="formGridCity">
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
            </Form.Row>)
                }

                
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
    );
    }
}

const mapStateToProps = (state)=>{
    return{
      user:state.auth.user,
      validated:state.testvalid.testValidation,
      fromAirport:state.airReduc.airportList,
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return{
      logout:()=>{dispatch(logout())},
      login:(user)=>{dispatch(login(user))},
      testvalidate:(val)=>{dispatch(testvalidation(val))},
      listAirports:(param)=>{dispatch(listAirports(param))},
    }
  }  
export default connect(mapStateToProps,mapDispatchToProps)(SearchFlightForm);
