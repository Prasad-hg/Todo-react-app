import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeButton from './LikeButton'
import ColorBox from './ColorBox'
import TodoList from './TodoList'

function App() {

  return (
    <>
    <h1>Todo App built with React</h1>

    {/* <div>
      Hello everyone!!
    </div>
      <LikeButton/> */}

      {/* <ColorBox/> */}
      <TodoList/>
      <footer style={{
      textAlign: "center",
      color: "#aaa",
      fontSize: "0.9rem",
      padding: "1rem"
    }}>
      © 2025 <strong>Prasad H G</strong> — Todo App built with <span style={{ color: "#61dafb" }}>React</span>
    </footer>


    </>
  )
}

export default App
