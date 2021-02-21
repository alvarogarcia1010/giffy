import useUser from 'hooks/useUser'
import React from 'react'
import { Link, useRoute } from 'wouter'
import './index.css'

const Header = props => {
  const { isLogged, logout } = useUser()
  const [match] = useRoute('/login')

  const handleLogoutClick = (e) => {
    e.preventDefault()
    logout()
  }

  if(match)
  {
    return null
  }

  return (
    <header className='gf-header'>
      {isLogged ?
        <button onClick={handleLogoutClick}>Logout</button> :
        <Link to="/login">Login</Link>
      }
    </header>
  )
}

export default Header
