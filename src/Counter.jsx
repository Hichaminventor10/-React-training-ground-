
import React , {useState} from 'react';



function Counter() {


const [count , setCount] = useState(0) ;

const increment = () => {
    setCount(count + 1)
}
const decrement = () => {
    setCount(count - 1)
}
const reset = () => {
    setCount(0)
}

return (
    <div className='counter-container'>
        <h1 className='counter-value'>{count}</h1>
        <button onClick={increment}>Add +</button>
        <button onClick={decrement}>Subtract -</button>
        <button onClick={reset}>Reset</button>
    </div>
)





}

export default Counter;