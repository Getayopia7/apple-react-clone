import React from 'react'
// import {Route,Routes} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../src/commonSource/css/bootstrap.css'
import '../src/commonSource/css/styles.css'

import HeaderRouting from './components/Routing/MyRouting';
import Main from './components/Main/Main';
function App(){

  return (
    <>
      <Header />
      {/* all the heading and the body routing held */}
      <HeaderRouting />
      <Footer />
    </>
  )

}

export default App;
