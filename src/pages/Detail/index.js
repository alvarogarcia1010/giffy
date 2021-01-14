import React from 'react'
import Gif from 'components/Gif/Gif'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

const Detail = ({params}) => {
  const {gif, loading, isError} = useSingleGif({id: params.id})
  const title = gif? gif.title : ''

  if(loading ) return (
    <>
    <Helmet>
      <title>Cargando...</title>
    </Helmet>
    <p>Loading</p>
    </>
  )

  if(isError) return <Redirect to='/404'/>

  return (
    <>
      <Helmet>
        <title>Giffy | {title}</title>
      </Helmet>
      <h3 class="App-title">{title}</h3>
      <Gif {...gif} />
    </>
    
  )
}

export default Detail
