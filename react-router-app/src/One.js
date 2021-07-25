import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class One extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            
            <div>
                <h1>React Router</h1>
            </div> 
            
            <div>
                <ul>
                    <li>
                        <Link to="/Two">TWO</Link>
                    </li>
                </ul>
            </div>

            </div>

            
         );
    }
}
 
export default One;