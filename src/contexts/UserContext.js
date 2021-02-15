import React, {useState, useEffect} from "react";
import getFavs from "services/getFavs";

export const UserContext = React.createContext({});

export function UserContextProvider({children}) {
  const [favs, setFavs] = useState([]);
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem("jwt"));

  useEffect(() => {
    if(!jwt) return setFavs([])

    getFavs({jwt})
      .then(setFavs)
    
  }, [jwt])

  return (
    <UserContext.Provider
      value={{
        favs,
        jwt,
        setFavs,
        setJwt
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
