import React from 'react'
import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'
import './fav.css'

const Fav = ({id}) => {
  const {isLogged} = useUser()
  const [, navigate] = useLocation()

  const handleClick = () => {
    if(!isLogged) return navigate('/login')
    console.log(id)
  }

  return (
    <button className="gif-fav" onClick={handleClick}>
      <span aria-label='Fav gif' role='img'>❤</span>
    </button>
  )
}

export default Fav
