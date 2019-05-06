import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'; /*, NavDropdown*/
import {connect} from "react-redux";
import{login,logout} from '../../store/actions/mockLoginAction';
import {NavLink} from 'react-router-dom';
import{testvalidation} from '../../store/actions/formValidationActions';

class HeaderComponent extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }

    render(){
        // console.log("hello"+JSON.stringify(this.props));

    let LoginButton = {
        sign:this.props.user.loggedIn?'Sign out':'Sign in',
        link:this.props.user.loggedIn?'/logout':'/login'
    }

    let userButtons = null;
    if (this.props.user.loggedIn) {
        userButtons = [<NavLink to="/profile" key='1'>Profile</NavLink>,
        <NavLink to="/orders" key='2'>Orders</NavLink>];
    } else {
        userButtons = null;
    }

    let doLogOut = () => {
        alert('logout');
        this.props.testvalidate({ validated: false });
        this.props.logout();
    }

    let doLogIn = () => {
        alert('login');
        let user={loggedIn:false};
        this.props.login(user);
    }

    let signInOut = (e)=>{
        e.preventDefault();
        console.log(this.props.user.loggedIn);
        if(!this.props.user.loggedIn) doLogIn(); 
        else if (this.props.user.loggedIn) doLogOut(); 
    }
    
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
        <Navbar.Brand > <NavLink to="/home" className="active">Utopia Airlines</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            {userButtons}
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
            <NavLink to="/contact">@Contact</NavLink>
            <NavLink to="/flights">Flights</NavLink>
            <NavLink to="/test">Test</NavLink>
            <NavLink eventKey={2} onClick={signInOut}>
                {LoginButton.sign} 
            </NavLink>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

}
const mapStateToProps = (state)=>{
    return{
      user:state.auth.user,
    }
  };

  const mapDispatchToProps = (dispatch)=>{
    return{
      logout:()=>{dispatch(logout())},
      login:(user)=>{dispatch(login(user))},
      testvalidate:(val)=>{dispatch(testvalidation(val))}
    }
  }  
  
  
export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);
