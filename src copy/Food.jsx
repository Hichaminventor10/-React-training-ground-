


import {useState} from 'react';


function Food() {

const [foods , setFoods] = useState(['pizza', 'burger', 'pasta']) ;

function handleAddfood() {

const newFood = document.getElementById("foodInput").value
document.getElementById("foodInput").value = "" ;



setFoods(f => [...f , newFood])

}
function handleRemovefood(index) {


setFoods(f => f.filter((_, i) => i !== index));


}



return (
    <div>
        <h1>Food List</h1>
        <ul>
            {foods.map((food, index) => 
                <li key={index} onDoubleClick={() => handleRemovefood(index)} >{food}</li> )}
            
        </ul>
        <input type="text" 
        id="foodInput" 
        placeholder='type food' 
        onKeyDown={e => {
            if (e.key === "Enter") {
                handleRemovefood() 
            }
        }}
     />
        <button onClick={handleAddfood}>Add food</button>
        <button onClick={handleRemovefood}>Remove food</button>
    </div>
)
}








export default Food;