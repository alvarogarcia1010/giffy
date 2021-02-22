import React, { useEffect, useState } from 'react'
import useLocation from 'wouter/use-location'
import useUser from 'hooks/useUser'
import './login.css'

const Login = ({onLogin}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, setLocation] = useLocation()
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    login({username, password})
  }

  useEffect(() => {
    if(isLogged) {
      setLocation('/')
      onLogin && onLogin()
    }
  }, [isLogged, onLogin])

  return (
    <div>
      {isLoginLoading && <strong>Checking credentials...</strong>}

      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>
            Username:
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
          </label>
          <label>
            Password:
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
          </label>
          <button className="btn">Login</button>
        </form>
      }

      {hasLoginError && <strong>Credentials are invalid</strong>}

    </div>
  )
}

export default Login
