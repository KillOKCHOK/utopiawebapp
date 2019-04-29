import React from 'react';
import HeaderComponent from './components/common/HeaderComponent';
import ContentComponent from './components/common/ContentComponent';
// import FooterComponent from './components/common/FooterComponent';
import '../src/styles/style.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <ContentComponent></ContentComponent>
      {/* <FooterComponent></FooterComponent> */}
    </div>
  );
}

export default App;
