import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from './RegisterForm'


function App() {
  return (
    <div className="app-container">
      <h1>Bem-vindo faça seu cadastro!</h1>
      <RegisterForm />
      
      <Link to="/login">
        <button>Ir para Login</button>
      </Link>
    </div>
  )
}

export default App
