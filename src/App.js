import React from 'react';
import HeaderComponent from './components/common/HeaderComponent';
import ContentComponent from './components/common/ContentComponent';
// import FooterComponent from './components/common/FooterComponent';
import '../src/styles/style.css';
import {connect} from "react-redux";
import{login,logout} from './store/actions/mock/mockLoginAction';

function App(props) {
  return (
    <div className="App">
      <HeaderComponent user={props.user}></HeaderComponent>
      <ContentComponent></ContentComponent>
      {/* <FooterComponent></FooterComponent> */}
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    user:state.auth.user,
  }
};

const mapDispatchToProps = (dispatch)=>{
  return{
    logout:()=>{dispatch(logout())},
    login:(user)=>{dispatch(login(user))}
  }
}  ;


export default connect(mapStateToProps,mapDispatchToProps)(App);
