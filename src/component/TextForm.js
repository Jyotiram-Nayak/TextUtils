import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handelOnChange = (event) => {
        setText(event.target.value);
    }
    const handelOnClick = () => {
        const newtext = text.toUpperCase();
        setText(newtext);
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode} text-${props.mode === "light" ? "black" : "light"}`} onChange={handelOnChange} rows="8" value={text}></textarea>
                <button className="btn btn-primary my-3" onClick={handelOnClick}>Click to uppercase</button>
            </div>
            <div className="container">
                <h1>Your Text</h1>
                <p>{text === "" ? 0 : text.trim().split(" ").length} words {text.length} charactors</p>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p>{text.length<1 ? "Enter something to preview" : text}</p>
            </div>
        </>
    )
}

TextForm.prototype = {
    heading: PropTypes.string.isRequired
}