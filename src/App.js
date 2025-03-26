import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Header from './components/header/header';
import Main from "./components/main/main"
import Footer from "./components/footer/footer"

function App() {
  const initialState = JSON.parse(window.localStorage.getItem("tasks")) || []
  const [tasks, setTasks] = useState(initialState)
  const activeTasks = tasks.filter(task => task.status === 'Backlog').length 
  const finishedTasks = tasks.filter(task => task.status === 'Finished').length

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Main tasks = {tasks} setTasks = {setTasks} />
        <Footer activeTasks = {activeTasks} finishedTasks = {finishedTasks} />
      </div>
    </BrowserRouter>
  );
}

export default App;
