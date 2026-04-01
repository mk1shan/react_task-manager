import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import SearchBar from './components/SearchBar'
import TaskList from './components/taskList'
import Practise1 from "./components/practise1"
import StudentCad from './components/StudentCad'
import MathExample from './components/MathExample'
import ProfileCrad from './components/ProfileCrad'
import Assesment1 from './components/Assesment1'

function App() {


return(
  <div>



    {/* <Practise1/>
    <ProfileCrad/>
    */}
<Assesment1 name="mudipa" course ="it" age="25"></Assesment1>
<Assesment1 name="mudipa2" course ="it2" age="252"></Assesment1>
<Assesment1 name="mudipa3" course ="it3" age="253"></Assesment1>


{/* <StudentCad name = "MUDIPA" course = "software "></StudentCad>
<StudentCad name = "MUDIPA2" course = "software 2"></StudentCad> */}


  </div>
)













// const [task,setTask]=useState("");//current input
// const [search,setSearch] =useState("");
// const [tasks,setTasks]=useState([]);//saved list (multiple e
// // wa save kranna)


// const handleaddTask =()=>{
//   if(task.trim()=== "") return;//emty ho space nm eth add nowenna
//   setTasks([...tasks,task]);
//   setTask("");
// }

// const filterTasks =tasks.filter((item)=>
// item.toLowerCase().includes(search.toLocaleLowerCase()))


// const handleDeleteTask = (taskIndex) =>{
//   const updatedTasks = tasks.filter((_,index)=>index !== taskIndex);
//   setTasks(updatedTasks);};

//   return (

//    <div className="app">
//       <div className="container">
//         <Header />
       
//         <TaskForm task ={task} setTask={setTask}  handleaddTask={handleaddTask}/>
//         <SearchBar search={search} setSearch={setSearch}/>
//         <TaskList tasks={filterTasks}  handleDeleteTask= {handleDeleteTask}/>
//       </div>
//     </div>
//   )
}


export default App
