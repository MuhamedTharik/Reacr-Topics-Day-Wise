import react,{useState} from 'react'
function Counter(){

    const [count,setCount] = useState(0);
    const Increment = ()=>{
        setCount(count+1);
    }
    const decrement = ()=>{
        setCount(count-1);
    }
    const reset = ()=>{
        setCount(0);
    }

    return(
        <>
        <div className="container">
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
        </>
    );
}
export default Counter