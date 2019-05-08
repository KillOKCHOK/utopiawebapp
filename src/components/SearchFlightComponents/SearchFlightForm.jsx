import React from 'react';
import {Form,Col,Button,Row} from "react-bootstrap";
import {connect} from "react-redux";
import{login,logout} from '../../store/actions/mock/mockLoginAction';
import{testvalidation} from '../../store/actions/mock/formValidationActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {listAirports,changeTripType} from '../../store/actions/searchFlightActions'


class SearchFlightForm extends React.Component {

    componentDidMount=()=>{
        this.oneWayTripType = document.getElementById('formHorizontalRadios1').checked;// store in redux, fetch when needed
    }
    
    handleFirstDateChange=(e)=>{
        console.log(Date(e));
    }
    
    handleAirportChange=(e)=>{
        this.props.listAirports(e.target.value);
    }

    selectFirstAirport=(e)=>{
        console.log({airport:e.currentTarget.value});
        let firstAirport;
        if(Array.isArray(this.props.airportList)){this.props.airportList.forEach(item => {
            if((item.airport_name+" "+item.city_name+" "+item.airport_code)===e.currentTarget.value){
                firstAirport = item;
                // console.log(true);
                // store firstAirport only if matches
            }
        })}
        console.log(firstAirport);
    }
    selectSecondAirport=(e)=>{
        console.log({airport:e.currentTarget.value});
        let secondAirport;
        if(Array.isArray(this.props.airportList)){this.props.airportList.forEach(item => {
            if((item.airport_name+" "+item.city_name+" "+item.airport_code)===e.currentTarget.value){
                secondAirport = item;
                // console.log(true);
                // store firstAirport only if matches
            }
        })}
        console.log(secondAirport);
    }

    tripTypeChange = (e) => {
        let oneWayTripType = document.getElementById('formHorizontalRadios1').checked;
        this.props.changeTripType(oneWayTripType);
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          event.preventDefault();
          event.stopPropagation();
          let fromCity = form.formGridCity1.value;
          let toCity = form.toGridCity2.value;
          let oneWayTripType = form.formHorizontalRadios1.checked;
      }
  };

  

  render(){

    const firstAirportsList = Array.isArray(this.props.airportList)?this.props.airportList.map(item => {
        return <option  key={item.airport_id}>{item.airport_name} {item.city_name} {item.airport_code}</option>
    },this):[];

    return(
        <Form
            noValidate
            validated={true}
            onSubmit={e => this.handleSubmit(e)}>
                <br/>
                <Form.Group as={Row} controlId="formOneOrRoundId">
                        <Form.Check onClickCapture={this.tripTypeChange}
                        className="px-4"
                        inline
                        type="radio"
                        label="One-way"
                        defaultChecked={this.props.oneWay}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check onClick={this.tripTypeChange}
                        inline
                        type="radio"
                        label="Roundtrip"
                        defaultChecked={!this.props.oneWay}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                </Form.Group>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity1">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" placeholder="City or airport" list="firstAirportsList" onInput={e=>this.selectFirstAirport(e)} required onKeyUp={this.handleAirportChange} />
                    <datalist id="firstAirportsList" >  
                        {/**map our airport here */}
                        {/* <option value="Boston"></option>
                        <option value="Cambridge"></option>
                        <option>New York</option> */}
                        {firstAirportsList}
                    </datalist>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city or airport.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="toGridCity2">
                <Form.Label>To</Form.Label>
                    <Form.Control type="text" placeholder="Airport or city" required list="secondAirportsList" onInput={e=>this.selectSecondAirport(e)} required onKeyUp={this.handleAirportChange} />
                    <datalist id="secondAirportsList" > 
                        {firstAirportsList}
                    </datalist>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city or airport.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            {/* https://reactdatepicker.com/#example-7 react-datepicker docs */}
                {this.props.oneWay?
                (<Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridDate">
                        <Form.Label >Flight Date</Form.Label>
                        <br/>
                        <DatePicker className="text-center form-control mydatepickerClass"
                            selected={new Date()}
                            onChange={this.handleFirstDateChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formGridCity">
                        <Form.Label>Travelers</Form.Label>
                        <Form.Control as="select" defaultValue={false?5:1}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>)
                :
                (<Form.Row>
                <Form.Group as={Col} md="3" controlId="formGridDate">
                    <Form.Label className="px-2 pr-3">Flight #1</Form.Label>
                    <DatePicker className="form-control mydatepickerClass"
                            selected={new Date()}
                            onChange={this.handleFirstDateChange}
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
                    <Form.Control as="select" defaultValue={false?5:1}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
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
      airportList:state.searchFlightReducer.airportList,
      oneWay:state.searchFlightReducer.oneWay,
    }
}

  const mapDispatchToProps = (dispatch)=>{
    return{
      logout:()=>{dispatch(logout())},
      login:(user)=>{dispatch(login(user))},
      testvalidate:(val)=>{dispatch(testvalidation(val))},
      listAirports:(param)=>{dispatch(listAirports(param))},
      changeTripType:(param)=>{dispatch(changeTripType(param))},
    }
  }  
export default connect(mapStateToProps,mapDispatchToProps)(SearchFlightForm);
