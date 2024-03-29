import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick =()=>{
       // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick =()=>{
        //console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleMailExtractorClick = () => {
        //console.log("Mail Extractor was clicked");
        const extractedEmails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        if (extractedEmails) {
            setextractedEmails(extractedEmails.join(', ')); // Join extracted emails if multiple found
        } else {
            setextractedEmails("No email addresses found");
        }
        props.showAlert("Mail exctracted","success");
    }

    const handleOnChange =(event)=>{
       // console.log("on change");
        setText(event.target.value);
    }
    
    const handleClearText=()=>{
        setText("");
        props.showAlert("Text deleted","success");
    }
    const handleCopyText=()=>{
        //var text = document.getElementById("myBox");   //using navigator API there is no need of selection and de selection of text
        //text.select();
       // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
       // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard","success");
    }
    
    const[text,setText] = useState("Enter text here");
    const[extractedEmails,setextractedEmails] = useState([]);
    return (
        <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'black'}} >
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#223a60':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Change to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Change to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleMailExtractorClick}>Extract Mail</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
        <p>{.008 * text.trim().split(/\s+/).filter(Boolean).length} Mintues to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        <h2>Emails</h2>
        <p>{extractedEmails}</p>
        </div>
        </>
    )
}