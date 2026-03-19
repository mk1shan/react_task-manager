
const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((item, index) => (
        <div key={index} className="taskItem">
          {item}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
