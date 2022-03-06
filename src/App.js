import './App.css';
import NavbarComp from './components/NavbarComp';
import BodyComp from './components/BodyComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import AlertComp from './components/AlertComp';

import {Routes, Route} from "react-router-dom";
import AboutComp from './components/AboutComp';

function App() {
 
  const [mode,setmode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (variant, msg)=>
  {
    setAlert({
      variant:variant,
      msg:msg
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>
  {
    if(mode === "dark")
    {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
    else
    {
      setmode("dark");
      document.body.style.backgroundColor = "#373a3d";
    }
  }


  return (
    <>
      <NavbarComp title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <AlertComp alert={alert}/>
        <Routes>
          <Route path="/" element={<BodyComp mode={mode} showAlert={showAlert}/>}/>
          <Route path="/about" element={<AboutComp mode={mode}/>}/>
        </Routes>
    </>

  );
}

export default App;
