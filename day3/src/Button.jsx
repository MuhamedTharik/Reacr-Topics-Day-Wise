
function Button(){
    //const handleClick = () => console.log("Hi bro");
    //const handleClick2 =(name) => console.log(`${name} please stop clicking me bro`)
    const handleClick3 = () => {setButtonColor('red')};
    return(
        <>
            <button  onClick={() => handleClick3}>Click Me</button>
        </>
        );
}

export default Button;