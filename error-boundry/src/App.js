import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js'
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ErrorBoundary>
        <Hero HeroName="Hassaan Ali"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero HeroName="Mamnoon"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero HeroName="Usama"></Hero>
        </ErrorBoundary>
       

      </header>
      </div>
     );
  }
}
 
export default App;
