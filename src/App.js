import './App.css';
//import About from './components/About.js';
import Navbar from './components/Navbar.js';
//import Practice from './components/Practice.js';
import TextForm from './components/TextForm.js';


function App() {
  return (
    <>
      <Navbar text="Utils" aboutText="About Utils" />
      {/* <Navbar/> */}
      <div className="container">
        <TextForm heading = "Enter text here to analyze"/>
        {/* <About /> */}
      </div>
      {/* <Practice /> */}
    </>

  );
}

export default App;


