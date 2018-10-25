import React, { Component } from 'react';
import './App.css';
import NavBar from './component/NavBar'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Home from './component/Home'
import Model from './component/Model'
import Actor from './component/Actor'
import Music from './component/Music'
import About from './component/About'
import Contact from './component/Contact'
import NotFoud from './component/NotFoud'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <div className="App">
          <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/model' component={Model}/>
          <Route path='/actor' component={Actor}/>
          <Route path='/music' component={Music}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route component={NotFoud}/>
        </Switch>
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
