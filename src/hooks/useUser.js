import React, { useCallback, useContext, useState } from 'react';
import UserContext from 'contexts/UserContext';
import loginService from 'services/login'

export default function useUser () 
{
  const { jwt, setJwt } = useContext(UserContext)
  const [state, setState] = useState({loading: false, error: false})

  const login = useCallback(({username, password}) => {
    setState({loading: true, error: false})
    loginService({username, password})
      .then(jwt => {
        setState({loading: false, error: false})
        setJwt(jwt)
      })
      .catch(err => {
        setState({loading: false, error: true})
        console.log(err)
      })
    
  }, [setJwt])

  const logout = useCallback(() => {
    setJwt(null)
  }, [setJwt])

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login, 
    logout
  }
}