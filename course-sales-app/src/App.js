import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';
import { Component } from 'react';

class App extends Component {


  render(){
    var courses = [
      {name:'React',price:1000},
      {name:'Angular',price:2000},
      {name:'Django',price:3000},
      {name:'Flask',price:4000}
    ];
  
  return (
    <div className="App">
     <h1>Course Sales App</h1>
     <Coursesales items = {courses}  />
    </div>
  );
}
}

export default App;
