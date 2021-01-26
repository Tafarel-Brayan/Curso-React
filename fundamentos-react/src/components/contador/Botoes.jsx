import React from 'react';

export default props => {
    return(
        <p>
            <button onClick={props.decrementar} >-</button>
            <button onClick={props.incrementar} >+</button>
        </p>
    )
}