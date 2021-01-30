import React from 'react'
import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'
import './fav.css'

const Fav = ({id}) => {
  const {isLogged, addFav, favs} = useUser()
  const [, navigate] = useLocation()

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if(!isLogged) return navigate('/login')
    addFav({id})
  }

  const [label, emoji] = isFaved? ["Remove fav", "❌"] : ["Add fav", "❤"]

  return (
    <button className="gf-Fav" onClick={handleClick}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  )
}

export default Fav
