import React , {useState} from 'react'

export default function TextForm(props) {
  const[text,setText]=useState("");
  //text="new text"; wrong way to change the text
  //setText("new Text");  correct way to change the state
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const handleCopy=()=>{
    console.log("copy function enabled")
    let newText=document.getElementById('myBox');
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to Clipboard","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }
  const handleOnChange=(event)=>{
    // console.log("on chnaged");
    setText(event.target.value);
  }
  return (
      <>
    <div className='contianer' style={{color:props.mode==='light'?'#071018':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'#071018':'white'}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
     </div>
     <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
     <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LoweCase</button>
     <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
     <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
     <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra space</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'#071018':'white'}} >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text int the text box above to preview it here"}</p>
    </div>
    </>
  )
}
