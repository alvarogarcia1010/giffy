import React, { useEffect, useState } from 'react'
import useLocation from 'wouter/use-location'
import useUser from 'hooks/useUser'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, setLocation] = useLocation()
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    login({username, password})
  }

  useEffect(() => {
    if(isLogged) setLocation('/')
  }, [isLogged])

  return (
    <div>
      <h2>Login</h2>
      {isLoginLoading && <strong>Checking credentials...</strong>}

      {!isLoginLoading &&
        <form onSubmit={handleSubmit}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
          <button>Login</button>
        </form>
      }

      {hasLoginError && <h2>Error</h2>}

    </div>
  )
}

export default Login
