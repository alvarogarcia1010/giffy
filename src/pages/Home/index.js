import React, { useState } from 'react'
import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import useGifs from 'hooks/useGifs';

const Home = () => {
  const [keyword, setKeyword] = useState('')
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation()
  // eslint-disable-next-line
  const {loading, gifs} = useGifs()
  const handleSubmit = evt => {
    evt.preventDefault()
    
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => setKeyword(evt.target.value)

  return (
    <>
      <h2>Los gifs mas populares</h2>
      <form onSubmit={handleSubmit} role="form">
        <input type="text" value={keyword} onChange={handleChange} placeholder="Search a gif here..."/>
      </form>
      <h3>Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3>Tendencias</h3>
      <TrendingSearches/>

    </>
  )
}

export default Home
