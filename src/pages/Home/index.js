import React, { useCallback } from 'react'
import { useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';
import useGifs from 'hooks/useGifs';

const Home = () => {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation()
  // eslint-disable-next-line
  const {loading, gifs} = useGifs()

  const handleSubmit = useCallback(keyword => {
    console.log(keyword)
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])


  return (
    <>
      <h2>Los gifs mas populares</h2>
      <SearchForm handleSubmit={handleSubmit} />
      <h3>Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3>Tendencias</h3>
      <TrendingSearches/>

    </>
  )
}

export default Home
