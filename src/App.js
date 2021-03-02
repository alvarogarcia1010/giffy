import React from 'react'
import { Route, Link, Switch } from 'wouter'
import Header from 'components/Header'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Detail from 'pages/Detail'
import Home from 'pages/Home'
import ErrorPage from 'pages/ErrorPage'
import SearchResults from 'pages/SearchResults'
import { UserContextProvider } from 'contexts/UserContext'
import {GifsContextProvider} from 'contexts/GifsContext'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <section className="App-content">
          <Header/>
          <Link to="/">Giffy</Link>
          <GifsContextProvider>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/search/:keyword/:rating?" component={SearchResults}/>
              <Route path="/gif/:id" component={Detail}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route component={ErrorPage} path="/:rest*" />
            </Switch>
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}

export default App;
