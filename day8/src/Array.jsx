import React,{useState} from 'react'

function Array() {

    const [tasks,setTask] = useState([])

    const handleAddTask =(()=>{
        const newTask=document.getElementById("taskInput").value;
        document.getElementById("taskInput").value=" ";
        setTask(t=>[...t,newTask]);
    })

    const handleRemoveTask =((index)=>{
        setTask(tasks.filter((_,i)=> i!==index))
    })


  return (
    <>
    <h1>List of Tasks</h1>
    <ul>
        {tasks.map((task,index)=><li key={index} onClick={()=>handleRemoveTask(index)}>{task}</li>)}
    </ul>
    <input type="text" id="taskInput" placeholder='Enter task' />
    <button onClick={handleAddTask}>Add</button>
    </>
  )
}

export default Array