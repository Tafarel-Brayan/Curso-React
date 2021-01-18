import React from 'react'
import "./Card.css"
export default (props) => {

    return(
        <div className="Card sucess" >
            <div className="card-header">
                <h2>{ props.titulo }</h2>
            </div>
            <div className="card-body">
                { props.children }
            </div>
        </div>
    )
}