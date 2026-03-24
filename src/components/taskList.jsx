
const TaskList = ({ tasks,handleDeleteTask }) => {
  return (
    <div>
      {tasks.map((item, index) => (
        <div key={index} className="taskItemRow">
        <span className="taskText">{item}</span>
       <button className="deleteButton" onClick={()=>handleDeleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
