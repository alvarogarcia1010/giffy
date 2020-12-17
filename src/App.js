import React from 'react'
import { Route, Link } from 'wouter'
import './App.css'
import Detail from './pages/Detail'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Context from './contexts/StaticContext'
import {GifsContextProvider} from './contexts/GifsContext'

function App() {

  return (
    <Context.Provider value={{name:"Alvaro"}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">Giffy</Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults}/>
            <Route path="/gif/:id" component={Detail}/>
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
