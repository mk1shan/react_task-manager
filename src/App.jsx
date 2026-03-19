import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import SearchBar from './components/SearchBar'


function App() {

const [task,setTask]=useState("");


  return (

   <div className="app">
      <div className="container">
        <Header />
        <TaskForm task ={task} setTask={setTask}/>
        <SearchBar/>
      </div>
    </div>
  )
}


export default App
