
import React, { useState } from 'react';
import './Form.css';


function Form() {

const [values , setValues] = useState([])








return(
    <div className="container">
            <h1>Form in React</h1>
            <form>
                <label htmlFor='firstname'>First Name*</label>
                <input type="text" placeholder='Enter First Name' name="firstname"/>


                <label htmlFor='Lastname'>Last Name*</label>
                <input type="text" placeholder='Enter Last Name' name="lastname"/>


                <label htmlFor='email'>Email*</label>
                <input type="email" placeholder='Enter Email' name="email"/>


                <label htmlFor='gender'>Gender*</label>
                <input type="radio"  name="gender"/> Male 
                
                <input type="radio"  name="gender"/> Female

                <label htmlfor="subject">subject</label>
                <select name="subject" id="subject">
                    <option value="math">Math</option>
                    <option value="Physic">Physic</option>
                    <option value="English">English</option>

                </select>

                <label htmlfor="resume">Resume</label>
                    <input type="file" placeholder='Select Resume' name="resume"/>


                <label htmlfor="URL">URL</label>
                    <input type="text" placeholder='Enter Image URL' name="URL"/>


                <label htmlfor="about">About</label>
                    <textarea name="about" id="about" cols="30" rows="10" placeholder='Enter description'></textarea>

                    <button type="button">Reset</button>
                    <button type="submit" >Submit</button>


            </form>
    </div>



)

}

export default Form;