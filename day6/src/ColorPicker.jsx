import {useState} from 'react'

function ColorPicker() {

    const [color,setColor] = useState("green");

    const handleColor = (event)=>{
        setColor(event.target.value);
    }

  return (
    <div className="Color-picker-container">
    <div className="color-display"style={{background:color}}>
        <h1>Color:{color}</h1>
    </div>
        <label>Pick a color</label><br/>
        <input type='color' value={color} onChange={handleColor}/>
    </div>
  )
}
export default ColorPicker