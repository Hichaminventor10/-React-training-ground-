import React, { useState } from 'react';




function ToDoList() {


    const [tasks, setTasks] = useState(["Eat Breakfast","play Games","Take a Shower"]);
    const [NewTask, setNewTask] = useState("");



    function handleInputChange(event) {
         setNewTask(event.target.value)
    }
    function addTask() {

if (NewTask.trim() === "") {
    return;
}


         setTasks(t => [...t, NewTask]);
        setNewTask("") ;
    }
    function deleteTask(index) {
         const UpdatedTasks = tasks.filter((_, i) => i !== index);
         setTasks(UpdatedTasks);


    }
    function moveTaskUp(index) {
         if (index === 0) {
            return;
         }
         const UpdatedTasks = [...tasks];
         const temp = UpdatedTasks[index];
         UpdatedTasks[index] = UpdatedTasks[index - 1];
         UpdatedTasks[index - 1] = temp;
         setTasks(UpdatedTasks);

    }
    
    function moveTaskDown(index) {
         if (index === tasks.length - 1) {
            return;
         }
         const UpdatedTasks = [...tasks];
         const temp = UpdatedTasks[index];
         UpdatedTasks[index] = UpdatedTasks[index + 1];
         UpdatedTasks[index + 1] = temp;
         setTasks(UpdatedTasks);

    }



    return( <> 

<div className="to-do-list">
    <h1> To-Do-List </h1>

</div>
        <div>
            <input 
                type="text"
                placeholder='enter a task...'
                value={NewTask}
                onChange={handleInputChange}
            />
            <button className='Add-Task' 
                    onClick={addTask}
                    >Add Task
                    </button>
        </div>
            <ol>
                {tasks.map((task , index) => 
                <li key={index}>
                        <span className='text'>  {task}</span>
                        <button className='delete-button'
                            onClick={() => deleteTask(index)}
                            >delete
                        </button>
                        <button className='Up-button'
                            onClick={() => moveTaskUp(index)}
                            >Up
                        </button>
                        <button className='Down-button'
                            onClick={() => moveTaskDown(index)}
                            >Down
                        </button>

                </li>
                ) }
            </ol>


        </> ) ;
        

}




export default ToDoList;