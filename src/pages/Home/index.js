import React from 'react'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';
import useGifs from 'hooks/useGifs';
import { Helmet } from 'react-helmet';

const Home = () => {
  // eslint-disable-next-line
  const {loading, gifs} = useGifs()

  return (
    <>
      <Helmet>
        <title>Giffy | Home</title>
        <link rel='canonical' href='url'></link>
      </Helmet>
      <h2>Los gifs mas populares</h2>
      <SearchForm/>
      <h3>Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3>Tendencias</h3>
      <TrendingSearches/>

    </>
  )
}

export default Home
