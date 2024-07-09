import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '.src/pages/RegisterForm'


function App() {
  return (
    <div className="app-container">
      <h1>Bem-vindo a página!</h1>
      <RegisterForm />
      <Link to="/login">
        <button>Ir para Login</button>
      </Link>
    </div>
  )
}

export default App
