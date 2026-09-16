import React, {useState} from 'react';

function MyComponent() {
    const [name , setName] = useState("Guest") ;
    const [age , SetAge] = useState(0)
    const [isEmployed , SetisEmployed] = useState(true)

    const updateName = () => {
        setName("Hicham")
    }
    const updateAge = () => {
        SetAge(age +2)
    }
    const ToggleisEmployed = () => {

        SetisEmployed(!isEmployed)
    }

    return (

<div>
    <h2>Name : {name} </h2>
    <button onDoubleClick={updateName} > SetName </button>

    <h2>Age : {age} </h2>
    <button onDoubleClick={updateAge} > Increment </button>

    <p>is Employed : {isEmployed ?"Yes" : "NO"}</p>
    <button onMouseEnter={ToggleisEmployed}>Toggle  </button>

</div>

    )    


}

export default MyComponent;