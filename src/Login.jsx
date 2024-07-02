import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//const data = {
//  email: "meuemail@gmail.com",
//  password: "12345678"
//}
function Api(data){
  const { email, password  } = data; 
  console.log("seu email é", email, "eu espero","meuemail@gmail.com")
  console.log("sua senha é", password,  "eu espero", "12345678")

  if (email === "meuemail@gmail.com"){
    if (password === "12345678"){
      return {
        "success":true,
        "messages": "Senha correta"
      }
    } else {
      return {"success":false,"messages":"Senha Incorreta"}
    }
  }
  return {"success":false, "messages":"informação invalida"}
}

function Login() {
  const [msg, setMsg] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    console.log("cheguei até aqui")

    e.preventDefault()

    /*
    const url = `api.com/auth/login`;
    const data =fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email, password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (!data.success){
          setMsg(data.messages)
        }

      })
    */
    const data = Api({ email, password})
    
    // Lógica de autenticação aqui
    if (data.success){
      alert("Login com sucesso")
      navigate('/home')
    } else {
      alert(data.messages)
      setMsg(data.messages)
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      {msg && <div style={{
        color: "white",
        background: "#ee0a9d",
        padding: "12px",
      }}>
        {msg}
      </div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Login
