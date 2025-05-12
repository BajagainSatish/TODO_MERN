import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/HomePage";
import Landing from './pages/Landing/Landing'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import About from './pages/About/About'
import TodoList from './pages/Todos/TodoList'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path = "/" element = {<Landing/>}/>
          <Route path="/home" element={<Home />} />
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/todolist" element = {<TodoList/>}/>

        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
