import React from 'react';
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'; /*, NavDropdown*/
import{login,logout} from '../../store/actions/mock/mockLoginAction';
import{testvalidation} from '../../store/actions/mock/formValidationActions';
import {withRouter} from 'react-router';

class HeaderComponent extends React.Component{

    render(){

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
        this.props.testvalidate({ validated: false });
        this.props.logout();
    }

    let doLogIn = () => {
        let user={loggedIn:true};
        this.props.login(user);
    }

    let signInOut = (e)=>{
        // e.preventDefault();
        console.log(this.props)
        if(!this.props.user.loggedIn) doLogIn(); 
        else if (this.props.user.loggedIn) doLogOut(); 
    }
    
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
        <Navbar.Brand> <NavLink exact to="/">Utopia Airlines</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            {userButtons}
            </Nav>
            <Nav>
            <NavLink to="/contact">@Contact</NavLink>
            <NavLink to="/flights">Flights</NavLink>
            <NavLink to="/test">Test</NavLink>
            <NavLink eventkey={2} onClick={signInOut} className={this.props.location.pathname==='/logout'||this.props.location.pathname==='/login'?'active':''} to={LoginButton.link} style={{ minWidth:"100px"}}>
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
    // console.log("state:");
    // console.log(state);
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
  
  
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HeaderComponent));
