import React from 'react'

const TaskForm = ({task,setTask}) => {
    return (
        <div>
            <input className='input'
                type="text"
                placeholder='enter a task...' 
                    value ={task}
                    onChange={(e)=>setTask(e.target.value)}
                />

            <button className='addbutton'>add</button>

        </div>
    )
}

export default TaskForm
