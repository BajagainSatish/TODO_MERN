import './App.css'
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import About from './pages/About/About'
import TodoList from './pages/Todos/TodoList'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path = "/" element = {<Landing/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/todolist" element = {<TodoList/>}/>

        </Routes>
      </div>
    </>
  )
}

export default App
