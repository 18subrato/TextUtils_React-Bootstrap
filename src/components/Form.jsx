import React, { useState } from 'react'

const Form = (props) => {
  const handleUpClick=()=>{
    let u=text.toUpperCase();
    setText(u);
    props.showAlert("Changed into UpperCase","success")
  }
  const handleLoClick=()=>{
    let l=text.toLowerCase();
    setText(l);
    props.showAlert("Changed into LowerCase","success")
  }
  const handleChange=(event)=>{
    setText(event.target.value);
  }
  const handleCopy=()=>{
    let text=document.getElementById('mytext');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied...","primary")
  }
  const handleSpace=()=>{
    let n=text.split(/[ ]+/);
    setText(n.join(" "));
    props.showAlert("Extra spaces are removed","success")
  }
  const handleclear=()=>{
    setText("");
    props.showAlert("Text cleared","primary")
  }
  const[text,setText]=useState("");
  const[mode,setMode]=useState("DarkMode");
  return (
    <>
    <div className="container mt-4 "style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Enter your text to analyze</h3>
      <textarea className="form-control" id="mytext" value={text} rows="8" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleChange}></textarea>
      <button className="btn btn-primary mt-2 mx-1" onClick={handleUpClick}>UpperCase</button>
      <button className="btn btn-primary mt-2 mx-1" onClick={handleLoClick}>LowerCase</button>
      <button className="btn btn-primary mt-2 mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mt-2 mx-1" onClick={handleSpace}>Remove Space</button>
      <button className="btn btn-primary mt-2 mx-1" onClick={handleclear}>Clear</button>
    </div>
    <div className="container mt-4"style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } minutes read...</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in text box to preview"}</p>
    </div>
    </>
  )
}

export default Form
