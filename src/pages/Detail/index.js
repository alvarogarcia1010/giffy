import React from 'react'
import Gif from 'components/Gif/Gif'
import GifsContext from 'contexts/GifsContext'
import useGlobalGifs from 'hooks/useGlobalGifs'

const Detail = ({params}) => {
  const gifs = useGlobalGifs()
  const gif = gifs.find(singleGif => singleGif.id === params.id)

  console.log(gif)

  
  return (<Gif {...gif} />)
}

export default Detail
