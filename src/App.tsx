import React from 'react';
import './assest/styles/index.scss';
import "antd/dist/antd.css";
import { Switch, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { CoinDetails } from './components/CoinDetails';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' render={() => <Main />}/>
        <Route path='/details' render={() => <CoinDetails />}/>
        <Route path='*' render={() => <div>404</div>}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
