import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Footer from './Components/Footer';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Content/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
