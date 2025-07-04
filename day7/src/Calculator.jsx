import React,{useState} from 'react'

function Calculator() {
    const [input,setInput] = useState("");
    const handleClear =()=>{
        setInput("");
    }
    const handleValue = (value)=>{
        setInput((prev)=> prev+value);
    }
    const handleEqual = ()=>{
        try{
            setInput(eval(input).toString())
        }catch (error){
            setInput("error");
        }
    }
  return (
    <div className="calculator">
        <input type="text"  value={input} readOnly/>
        <div className="buttons">
        {['7', '8', '9', '/', 
          '4', '5', '6', '*', 
          '1', '2', '3', '-', 
          '0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === '=') handleEqual();
              else handleValue(btn);
            }}
          >
            {btn}
          </button>
        ))}
        <button className="clear" onClick={handleClear}>C</button>
        </div>
    </div>
  )
}

export default Calculator