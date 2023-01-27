// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');//show whether the dark mode is on or not 
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "black"
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="textUtils" mode={mode} togglemode={togglemode} />
      <Alert alert='this is alert' />
      <div className="container">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About />}/> */}
          <Textform heading="enter the text to analyse" mode={mode} />
      {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
