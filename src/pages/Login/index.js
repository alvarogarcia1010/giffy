import React, { useState } from 'react'
import useLocation from 'wouter/use-location'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, setLocation] = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocation('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
