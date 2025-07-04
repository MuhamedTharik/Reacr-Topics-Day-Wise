import React,{useState} from 'react'

function Component(){

    const [car,setCar] = useState({year:"",company:"",model:""}) // passing java script object in usestate hook and upating

    const handleYear = (event) =>{
        setCar(c=>({...c,year:event.target.value}))
    } 
    
    const handleCompany = (event)=>{
        setCar(c=>({...c,company:event.target.value}))
    }

    const handleModel = (event)=>{
        setCar(c=>({...c,model:event.target.value}))
    }
    return(<>
    <p>In {car.year} {car.company} lauched {car.model}</p>
    <input type="number" value={car.year} onChange={handleYear} /><br/>
    <input type="text" value={car.company} onChange={handleCompany} /><br/>
    <input type="text" value={car.model} onChange={handleModel} /><br/>
    </>);
}
export default Component