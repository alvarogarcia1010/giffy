import React, { useState, useEffect } from 'react'
import { Link } from 'wouter';
import getTrendingTerms from '../../services/getTrendingTerms'

const TrendingSearches = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms().then(setTrends)
  }, [])

  return (
    <ul>
    {
      trends.map(popularGif => (
        <li key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))
    }
    </ul>
  )
}

export default TrendingSearches;
