// tut7
import React, { useState } from 'react'


export default function Textform(props) {
    const handleUPclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handleOnChange = (event) => {
        settext(event.target.value);
    }

    const handlecopy=()=>{
        console.log(" text copied");
        var text=document.getElementById('mybox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const clearText=()=>{
        let text="";
        settext(text);
    }

    const handleExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        settext(newtext.join(" "));
    }

    const [text, settext] = useState("");// imp
    return (
        <>
            <div className='container' style={{color:props.mode==='light'?'black':'white'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}} id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUPclick} >Convert to uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handlecopy} >Copy text</button>
                <button className='btn btn-primary mx-1' onClick={clearText} >Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                <h3>your text summary</h3>
                <p>your text has {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
