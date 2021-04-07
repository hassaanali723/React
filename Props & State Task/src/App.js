import React, { Component } from 'react';
import './App.css';
import Userinput from './UserInput/Userinput';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './Char/CharComponent';

class App extends Component {

  
    state = { userInput: '' }

    stateChangeHandler= (event) => {
      this.setState({userInput: event.target.value});
    }

    charHandler = (index) => {
      const inputText = this.state.userInput.split('');
      inputText.splice(index,1)
      const updated = inputText.join('');
      this.setState({userInput:updated})
    }

  render() {
    const charList = this.state.userInput.split('').map((char,index) =>{
    return <CharComponent character={char} key={index} change={() => this.charHandler(index)}  />
    });

    return (
      <div className="App">
        <div className='main-app'>
          
        <Userinput change={this.stateChangeHandler} value={this.state.userInput} />
        <ValidationComponent Inputlength={this.state.userInput.length} />
        
        <h2>Task 4,5 & 6</h2>
        <div className='main'>
        {charList}
        </div>

        </div>
        
      </div>
    );
  }
}

export default App;
