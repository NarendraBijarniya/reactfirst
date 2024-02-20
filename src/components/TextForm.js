import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick =()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleMailExtractorClick = () => {
        console.log("Mail Extractor was clicked");
        const extractedEmails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        if (extractedEmails) {
            setextractedEmails(extractedEmails.join(', ')); // Join extracted emails if multiple found
        } else {
            setextractedEmails("No email addresses found");
        }
    }

    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    
    const handleClearText=()=>{
        setText("");
    }
    const handleCopyText=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    const[text,setText] = useState("Enter text here");
    const[extractedEmails,setextractedEmails] = useState([]);
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Change to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Change to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleMailExtractorClick}>Extract Mail</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
        </div>
        <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{.008 * text.split(" ").length} Mintues to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <h2>Emails</h2>
        <p>{extractedEmails}</p>
        </div>
        </>
    )
}