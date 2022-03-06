import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap';



export default function BodyComp(props) {

    const [text,setText] = useState("");

    const convertUp = ()=>
    {
        let textUp = text.toUpperCase();
        setText(textUp);
        props.showAlert("primary","Converted to Uppercase.");
    }

    const convertLo = ()=>
    {
        let textUp = text.toLowerCase();
        setText(textUp);
        props.showAlert("primary","Converted to Lowercase.");
    }
    
    const clearText = ()=>
    {
        setText("");
        props.showAlert("primary","Text Cleared.");
    }
    
    const copyClip = ()=>
    {
        navigator.clipboard.writeText(text);
        props.showAlert("primary","Text Copied.");
    }

    const handleOnChange = (event)=>
    {
        setText(event.target.value);
    }
    
    const removeSpace = ()=>
    {
        let rmText = text.split(/[ ]+/g);
        setText(rmText.join(" "));
        props.showAlert("primary","Extra spaces removed.");

    }

    function countWords(val)
    {
        if(val==="")
        { 
            return 0;
        }
        else
        {
            return val.split(" ").length;
        }
    }





    return (
        <>
        <div className="container px-5">
            <Form className='container'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <h3 className='mt-4' style={{color: props.mode==="dark"?"white":"#343a40"}}>Enter the text here:</h3>
                    <Form.Control as="textarea" value={text} placeholder="Enter your text here" rows={6} onChange={handleOnChange}/>
                </Form.Group>
                <Button className='me-2' variant="primary" onClick={convertUp}>Convert to Uppercase</Button>
                <Button className='me-2' variant="primary" onClick={convertLo}>Convert to Lowercase</Button>
                <Button className='me-2' variant="primary" onClick={removeSpace}>Remove extra space</Button>
                <Button className='me-2' variant="primary" onClick={copyClip}>Copy to Clipboard</Button>
                <Button className='me-2' variant="primary" onClick={clearText}>Clear</Button>
            </Form>
            
            <div className="container mt-4" style={{color: props.mode==="dark"?"white":"#343a40"}}>
                <hr />
                <h3>Summary:</h3>
                <p>{countWords(text)} words, {text.length} characters</p>
            </div>
        </div>

        </>
    )
}
