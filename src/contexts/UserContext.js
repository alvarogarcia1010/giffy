import React, {useState} from "react";

export const UserContext = React.createContext({});

export function UserContextProvider({children}) {
  const [favs, setFavs] = useState([]);
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem("jwt"));

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
