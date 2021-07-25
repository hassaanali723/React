import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NoMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            
            <div>
                <h1>This page does not exists</h1>
            </div> 
            
            

            </div>

            
         );
    }
}
 
export default NoMatch;