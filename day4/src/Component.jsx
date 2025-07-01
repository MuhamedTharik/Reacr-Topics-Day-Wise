import React,{useState} from 'react'

function Component() {

    const [name,setName] = useState();
    const [age,setAge] = useState();

    const handleClick = ()=>{
        setName("Muhamed Tharik");
        setAge(21);
    }

  return (
    <>
    <p>My name is {name} and {age}  years old</p>
    <button onClick={handleClick}>Submit</button>
    </>
  )
}

export default Component