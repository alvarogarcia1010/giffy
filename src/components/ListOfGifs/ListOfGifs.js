import React from 'react'
import Gif from '../Gif/Gif'
import './styles.css'

const ListOfGifs = ({ gifs }) => {
  return (
  <div className="ListOfGifs">
    {gifs.map(singleGif => 
      <Gif 
        id={singleGif.id}
        key={singleGif.id}
        title={singleGif.title} 
        url={singleGif.url} 
      />
    )}
  </div>
  )
}

export default ListOfGifs
