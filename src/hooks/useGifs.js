import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../contexts/GifsContext'

const INITIAL_PAGE = 0

export default function useGifs({keyword} = {keyword: null}) 
{
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        localStorage.setItem('lastKeyword', keywordToUse)
        setLoading(false)
    })
  }, [keyword, keywordToUse, setGifs])

  useEffect(() => {
    if(page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        localStorage.setItem('lastKeyword', keywordToUse)
        setLoadingNextPage(false)
      })

  }, [keywordToUse, page, setGifs])

  return {loading, loadingNextPage, gifs, setPage}
}