import React from 'react';

const ValidationComponent = (props) => {
    var validationMessage = 'Message';

    if (props.Inputlength < 5){
        validationMessage = "Text too short";
    }
    else{
        validationMessage = "Text too long";
    }
    return(
        <div>
            <h2>Task 2 & 3</h2>
            {validationMessage}
            <hr/>
        </div>

    );

}
export default ValidationComponent;


