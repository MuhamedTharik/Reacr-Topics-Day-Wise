
function List(){
    const fruits = [{id:1,name:"apple",calories:95},
                    {id:2,name:"orange",calories:45},
                    {id:3,name:"grapes",calories:75},
                    {id:4,name:"banana",calories:105},
                    {id:5,name:"kiwi",calories:85}
                ];
    //const arrange_1 = fruits.sort((a,b)=> a.name.localeCompare(b.name)) LEXICOGRAPHICAL ORDER
    //const arrange_2 = fruits.sort((a,b)=> b.name.localeCompare(a.name)) REVERSE ORDER
    //const low_calories = fruits.filter(fruit => fruit.calories<100) LOW CALORIES
    //const high_calories = fruits.filter(fruit => fruit.calories>=100)
    const items = high_calories.map(fruit => <li key={fruit.id}>{fruit.name} &nbsp; <b>{fruit.calories}</b></li>)
    
    return(      
        <ol>{items}</ol>
    )
}
export default List