import React from 'react'
import "./Card.css"

export default (props) => {
    let className = props.color !== undefined ? `Card ${props.color}` : "Card default";

    return(
        <div className={className} >
            <div className="card-header">
                <h2>{ props.titulo }</h2>
            </div>
            <div className="card-body">
                { props.children }
            </div>
        </div>
    )
}