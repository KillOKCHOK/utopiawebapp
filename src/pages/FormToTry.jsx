import React from 'react';
import {Form,InputGroup,Button, Col} from 'react-bootstrap';

import {connect} from "react-redux";
import{login,logout} from '../store/actions/mockLoginAction';
import{testvalidation} from '../store/actions/formValidationActions';

class FormToTry extends React.Component {
    // constructor(props, ...args) {
    //     super(...args);
    //     this.props = props;
    //     this.state = { validated: false };
    // }


  
    handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{
        // console.log("true");
        event.preventDefault();
        event.stopPropagation();
        var user = {};
        user.loggedIn=true;
        user.fname = event.currentTarget.validationCustom01.value;
        user.lname = event.currentTarget.validationCustom02.value;
        user.username = event.currentTarget.validationCustomUsername.value;
        this.props.login(user);
        // alert("action triggered"+JSON.stringify(user));
        
        // console.log({user:user});
        // console.log(this.props);
        // this.props.history.push('/home');
        // alert("VALIDATED");
        // console.log("VALIDATED");
        this.props.testvalidate({ validated: false });
    }
    event.preventDefault();
    event.stopPropagation();
    
    this.props.testvalidate({ validated: true });
    
}

render() {
  const {validated} = this.props.validated;
  console.log("validated");
  console.log(validated);
    // console.log(this.props);
    return (
        <div>
          <h1>JGBUBNOUIHNIH {JSON.stringify(this.props.user)}</h1>
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue={this.props.user.lname?this.props.user.lname:'ddsdsfds'}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide last name of passanger.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>

        </div>
      );
    }
  }
  
  const mapStateToProps = (state)=>{
    return{
      user:state.auth.user,
      validated:state.testvalid.testValidation,
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return{
      logout:()=>{dispatch(logout())},
      login:(user)=>{dispatch(login(user))},
      testvalidate:(val)=>{dispatch(testvalidation(val))}
    }
  }  
  

export default connect(mapStateToProps,mapDispatchToProps)(FormToTry);