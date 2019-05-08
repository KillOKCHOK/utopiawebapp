import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchFlightPage from '../../pages/SearchFlightPage';
import FlightListPage from '../../pages/FlightListPage';
import OrderPage from '../../pages/OrderPage';
import ProfilePage from '../../pages/ProfilePage';
import ContactPage from '../../pages/ContactPage';

import {Container} from "react-bootstrap";
import pageToTry from '../../pages/mock/pageToTry';

let ContentComponent = (props) =>{

    return(
        <div>
            <Container>
                <Switch>
                    <Route exact path='/' component={SearchFlightPage}/>
                    <Route exact path='/flights' component={FlightListPage}/>
                    <Route exact path='/orders' component={OrderPage}/>
                    <Route exact path='/profile' component={ProfilePage}/>
                    <Route exact path='/contact' component={ContactPage}/>
                    <Route exact path='/test' component={pageToTry}/>
                    {/* <Route path='/home' render={(props) => (<Books {...props} bookList={this.state.bookList} />)}/> */}
                </Switch>
            </Container>

        </div>
    );

}
export default ContentComponent;

