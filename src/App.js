import React, { useState } from 'react';
import './App.css';
//import About from './components/About.js';
import Navbar from './components/Navbar.js';
//import Practice from './components/Practice.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';


function App() {
  const [mode, setMode] = useState('light');
  const [buttonText, setbuttonText] = useState('Enable DarkMode');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }


  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      setbuttonText('Disable DarkMode');
      document.body.style.backgroundColor='#062647';
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      setbuttonText('Enable DarkMode');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
    }

   
  }
  return (
    <>
      <Navbar text="Utils" aboutText="About Utils" mode = {mode} toggleMode={toggleMode} buttonText={buttonText}/>
      <Alert alert ={alert}/>
      {/* <Navbar/> */}
      <div className="container">
        <TextForm heading = "Enter text here to analyze" mode = {mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>
      {/* <Practice /> */}
    </>

  );
}

export default App;


