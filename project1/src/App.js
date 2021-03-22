import logo, { ReactComponent } from './logo.svg';
import React from 'react';
import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <h6>{this.propNum}</h6>
//       <h6>{this.propString}</h6>
//       <Parent />
     
//     </div>
//   );
// }



class App extends Component {
  state = {  }
  render() { 
    return ( <div className="App">
    <Header/>
    <h6>{this.props.propNum}</h6>
    <h6>{this.props.propString}</h6>
    <Parent />
   
  </div> );
  }
}
 


// App.propTypes={
//   propNum: React.PropTypes.number,
//   propString: React.PropTypes.string,
//   propObject: React.PropTypes.object
// }

App.defaultProps={
  propNum: 8,
  propString: 'Hassaan',
  propObject : {
    date: "8 August"
  }

}


class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cars: ['BMW' , 'City', 'Civic'] 
    }

    this.handleClick=this.handleClick.bind(this);
  }

handleClick(){
  this.setState ({cars: this.state.cars.reverse() })
}

  render() { 
    return ( 
      <div>
      <h1 onClick={this.handleClick}>Cars Shop</h1>
      <Cars msg="Cars are cool" model="12345" Coolcars={this.state.cars} />
      </div>
     );
  }
}

Parent.defaultProps= {
  cars: ['BMW' , 'City', 'Civic']
}

 
class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 

      <div>
        <h3>Cool Cars Title: {this.props.msg}</h3>
        <h4>Cool Cars Model: {this.props.model}</h4>
        <h5>Cool Cars Names: {this.props.Coolcars.map((item,i)=> {
        return <p key={i}>{item}</p>
        
        })}</h5>
      </div>

     );
  }
}



 

 
// export default Header;

export default App;
