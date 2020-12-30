import { useState, useEffect } from 'react';
import getSingleGifs from 'services/getSingleGif';
import useGifs from './useGifs'

export default function useSingleGif({id})
{
  const {gifs} = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)
  const [gif, setGif] = useState(gifFromCache)
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if(!gif)
    {
      setLoading(true)

      getSingleGifs({id})
        .then(gif => {
          setGif(gif)    
        })
        .catch(error => {
          setIsError(true)
        })
        .finally(() => {
          setLoading(false)
        })
    }

  }, [gif, id])

  return {gif}
}