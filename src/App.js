import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'

function App() {
    const [mode, setMode] = useState("light")
    const toggleMode = () => {
        if (mode === "light") {

            setMode("dark") 
            document.body.style.backgroundColor="#002030";
            document.body.style.color="white";
        }else{
            setMode("light");
            document.body.style.backgroundColor="white";
            document.body.style.color="black";
        }
    }
    return (
        <>
            <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
            <div className="container">
                <TextForm heading="Enter your text" mode={mode} />
            </div>
        </>
    );
}

export default App;
