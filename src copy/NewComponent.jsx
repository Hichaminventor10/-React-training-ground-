
import React, {useState} from 'react';

function NewComponent() {

 const [name , setName] = useState("") ;
 const [age , setAge] = useState() ;
 const [message , setMessage] = useState("") ;
 const [shipping , setShipping] = useState("") ;


 const handleChange = (e) => {
    setName(e.target.value)
 }


 
 const handleChangeage = (e) => {
    setAge(e.target.value)
 }

const handlemessage = (e) => {
    setMessage(e.target.value)
}


const handleShipping = (e) => {
    setShipping(e.target.value)
}



  return (<>
   <input type="text" value={name} onChange={(handleChange)} />
   <input type="text" value={age} onChange={(handleChangeage)} required />
   <input type="radio" value={shipping} onChange={(handleShipping)} />
   <textarea placeholder="Enter your message" type="text" value={message} onChange={(handlemessage)} />
   <p>Name : {name}</p>
   <p>Age : {age}</p>
   <p>Message : {message}</p>
   </>
  );    
}

export default NewComponent;