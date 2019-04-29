import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'; /*, NavDropdown*/

class HeaderComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isLoggedIn:true };
    }

    render(){

    // let isLoggedIn = this.state.isLoggedIn;

    let LoginButton = {
        sign:this.state.isLoggedIn?'Sign out':'Sign in',
        link:this.state.isLoggedIn?'/logout':'/login'
    }

    let userButtons = null;
    if (this.state.isLoggedIn) {
        userButtons = [<Nav.Link href="/profile" key='1'>Profile</Nav.Link>,
        <Nav.Link href="/orders" key='2'>Orders</Nav.Link>];
    } else {
        userButtons = null;
    }

    let signOut = (e)=>{
        e.preventDefault();
        this.setState({isLoggedIn:false});
        
    }
    
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">Utopia Airlines</Navbar.Brand>
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
            <Nav.Link href="/contact">@Contact</Nav.Link>
            <Nav.Link href="/flights">Flights</Nav.Link>
            <Nav.Link eventKey={2} onClick={signOut}>
                {LoginButton.sign} 
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

}
export default HeaderComponent;
