import React from 'react';



const Userinput = (props) => {
  return(
    <div>
    <h2>Task 1</h2>

    <input type='text' value={props.value} onChange={props.change} />
    <p>
        {props.value.length}
    </p>
    <hr/>
</div>
  );

    
}

export default Userinput; 
