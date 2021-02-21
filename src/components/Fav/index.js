import React, { useState } from 'react'
import useUser from 'hooks/useUser'
import { useLocation } from 'wouter'
import './fav.css'
import Modal from 'components/Modal'
import Login from 'components/Login'

const Fav = ({id}) => {
  const [showModal, setShowModal] = useState(false)
  const {isLogged, addFav, favs} = useUser()
  const [, navigate] = useLocation()

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if(!isLogged) return setShowModal(true)
    addFav({id})
  }

  const [label, emoji] = isFaved? ["Remove fav", "❌"] : ["Add fav", "❤"]

  return (
    <>
      <button className="gf-Fav" onClick={handleClick}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Login />
        </Modal>
      )}
    </>
  )
}

export default Fav
