import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../contexts/GifsContext'

const INITIAL_PAGE = 0

export default function useGifs({keyword, rating} = {keyword: null}) 
{
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)

    getGifs({ keyword: keywordToUse, rating })
      .then(gifs => {
        setGifs(gifs)
        localStorage.setItem('lastKeyword', keywordToUse)
        setLoading(false)
    })
  }, [keyword, keywordToUse, rating, setGifs])

  useEffect(() => {
    if(page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, rating, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        localStorage.setItem('lastKeyword', keywordToUse)
        setLoadingNextPage(false)
      })

  }, [keywordToUse, rating, page, setGifs])

  return {loading, loadingNextPage, gifs, setPage}
}