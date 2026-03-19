import React from 'react'

const TaskForm = ({task,setTask,handleaddTask}) => {
    return (
        <div>
            <input className='input'
                type="text"
                placeholder='enter a task...' 
                    value ={task}
                    onChange={(e)=>setTask(e.target.value)}
                />

            <button className='addbutton' onClick={handleaddTask}>add</button>

        </div>
    )
}

export default TaskForm
