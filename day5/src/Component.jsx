import React,{useState} from 'react'

function Component() {
    const [name,setName] = useState(""); //input field
    const [age,setAge] = useState(); // input field
    const [comment,setComment] = useState(" "); // text area
    const [payment,setPayment] = useState(" "); // dropdown
    const [Shipment,setShipment] = useState(" "); // radio button

    // arrow functions
    const handleName =(event)=>{
        setName(event.target.value);
    }
    const handleAge =(event)=>{
        setAge(event.target.value);
    }
    const handleComment =(event)=>{
        setComment(event.target.value);
    }
    const handlePayment =(event)=>{
        setPayment(event.target.value);
    }
     const handleShipment =(event)=>{
        setShipment(event.target.value);
    }
    
   
  return (
    <div>
        <input value={name} type="text" onChange={handleName} placeholder='Enter the name' />
        <p>Name:{name}</p>
        <input value={age} type="number" onChange={handleAge} />
        <p>Age:{age}</p>
        <textarea value={comment} onChange={handleComment}placeholder='Enter the comments'></textarea>
        <p>Comments:{comment}</p>
        <select value={payment} onChange={handlePayment}>
            <option value=" ">Select payment option</option>
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Bank">Online Banking</option>
        </select>
        <p>Payment option:{payment}</p>
        <label>
            <input type="radio" value="Pickup" checked={Shipment === "Pickup"} onChange={handleShipment}/>
            Pickup</label><br />
            <label>
            <input type="radio" value="Delivery" checked={Shipment === "Delivery"} onChange={handleShipment}/>
            Delivery</label><br />
            <p>Shipment type:{Shipment}</p>
    </div>
  )
}

export default Component