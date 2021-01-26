import React from 'react';

export default props => {
    return(
        <p>
            <input 
                type="number"
                id="passoInput"
                value={props.passo}
                onChange={props.setPasso}
            />
        </p>
    )
}