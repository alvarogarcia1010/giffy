import React, { useCallback, useEffect, useRef } from 'react'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

const SearchResults = ({params}) => {
  const {keyword} = params
  const {loading, gifs, setPage} = useGifs({keyword})
  const externalRef = useRef()
  
  const {isNearScreen} = useNearScreen({externalRef: loading? null : externalRef, once: false})

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])
  
  useEffect(() => {
    console.log(isNearScreen)
    if(isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])
  
  return (
  <>
    {
      loading?
      <i>Cargando...</i> :
      <>
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </>
  )
}

export default SearchResults
