import React, {useState} from 'react'
// import PropTypes from 'prop-types'

export default function Textform(props) {
    
    const handleonClick = ()=> {
        console.log("btn was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success")
    }
    const handleonLowClick = ()=> {
      console.log("btn was clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase", "success")
  }
  
    const handleonChange = (event)=> {
        console.log("Onchange");  // handles any changes to the textform/textarea
        setText(event.target.value);
    }
   
    const handleonClipboard = ()=> {
      let newText = document.getElementById("My-box");
      // copyText.select();
      // copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(text);  // copy to clipboard code
      alert("Copied the text: " + text);
    }
    const handleExtraSpaces = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces", "success")
    }
    
    
    const[text, setText] = useState('');
  
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1> 
<div className="mb-3">
  <textarea className="form-control" id="Mybox"value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} rows="8"></textarea>
</div>
   
    <button className='btn-upper' onClick={handleonClick}>Convert to Uppercase</button>
    <button className='btn-upper mx-2' onClick={handleonLowClick}>Convert to Lowercase</button>
    <button className='btn-upper mx-2'onClick={handleonClipboard} >Copy to Clipboard</button>
    <button className='btn-upper mx-2'onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p> {text.split(" ").length}  and  {text.length}</p>
      <p> {0.008 *text.split(" ").length } minutes to read</p>
    </div>
    </>
  )
  }
    // Textform.propTypes = {
    //     heading: PropTypes.string
    // }
