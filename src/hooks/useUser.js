import React, { useCallback, useContext, useState } from 'react';
import UserContext from 'contexts/UserContext';
import loginService from 'services/login'
import addFavService from 'services/addFav'

export default function useUser () 
{
  const { favs, jwt, setFavs, setJwt } = useContext(UserContext)
  const [state, setState] = useState({loading: false, error: false})

  const login = useCallback(({username, password}) => {
    setState({loading: true, error: false})
    loginService({username, password})
      .then(jwt => {
        window.sessionStorage.setItem('jwt', jwt)
        setState({loading: false, error: false})
        setJwt(jwt)
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        setState({loading: false, error: true})
        console.log(err)
      })
    
  }, [setJwt])

  const addFav = useCallback((id) => {
    addFavService(id, jwt)
      .then((id) => {
        setFavs((favs) => [...favs, id])
      })
      .catch((error) => console.error(error))
  },[])

  const logout = useCallback(() => {
    setJwt(null)
  }, [setJwt])

  return {
    favs,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login, 
    logout,
    addFav
  }
}