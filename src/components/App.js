
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue,setInputValue]=useState('');

  const handleInput=(data)=>{
    setInputValue(data.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text" value={inputValue} onChange={handleInput}></input>
        {inputValue!=''&&<p>Hello {inputValue}!</p>}
    </div>
  )
}

export default App
