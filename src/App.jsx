
import React , { useState } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Alert from "./components/Alert";


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState('null');
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert('null');      
    },2000);
  }
  const toggleMode=()=>{
    if(mode=='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success")
    }
  }
  return (
    <>
      <Navbar toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Form mode={mode} showAlert={showAlert}/>
      </div>
    </>
  )
}

export default App
