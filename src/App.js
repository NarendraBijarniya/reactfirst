import React, { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
//import Practice from './components/Practice.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [buttonText, setbuttonText] = useState('Enable DarkMode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  // const removeBodyClass=()=>{
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  // }

  const toggleMode = () => {
    //const toggleMode=(cls)=>{
    //removeBodyClass();
    //document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      setbuttonText('Disable DarkMode');
      document.body.style.backgroundColor = '#062647';
      showAlert("Dark mode enabled", "success");

      // setInterval(() => {
      //   document.title = "TextUtils is amazing!!";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    }
    else {
      setMode('light');
      setbuttonText('Enable DarkMode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      //document.title="TextUtils-Lightmode";
    }
  }

  return (
    <>
      <Router>
        <Navbar text="Utils" aboutText="About" mode={mode} toggleMode={toggleMode} buttonText={buttonText} />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<TextForm heading="Enter text here to analyze" mode={mode} showAlert={showAlert}/>}/>
          </Routes>
        </div>
        {/* <Practice /> */}
      </Router>
    </>

  );
}

export default App;


