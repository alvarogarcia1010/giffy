import React from 'react'
import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'

const Fav = ({id}) => {
  const {isLogged} = useUser()
  const [, navigate] = useLocation()

  const handleClick = () => {
    if(!isLogged) return navigate('/login')
    console.log(id)
  }

  return (
    <button onClick={handleClick}>
      <span aria-label='Fav gif' role='img'>❤</span>
    </button>
  )
}

export default Fav
