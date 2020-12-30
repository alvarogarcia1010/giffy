import React from 'react'
import Gif from 'components/Gif/Gif'
import useSingleGif from 'hooks/useSingleGif'

const Detail = ({params}) => {
  const {gif} = useSingleGif({id: params.id})
  console.log(gif)

  return (<Gif {...gif} />)
}

export default Detail
