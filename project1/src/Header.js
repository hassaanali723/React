import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';


class Header extends Component {


myname(name){
    return name;

}
    constructor(props) {
        super(props);
   
        this.state = {  }
    }
    state = {  }
    

    
    render() { 
        const name="Hassaan Ali";
      return (
          <h1>Welcome {this.myname("Hass")}</h1>


        );
    }
  }

  export default Header;