import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <h1>Bem-vindo à aplicação!</h1>
      <Link to="/login">
        <button>Ir para Login</button>
      </Link>
    </div>
  )
}

export default App
