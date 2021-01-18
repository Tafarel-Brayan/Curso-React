import React from 'react'
import ReactDom from 'react-dom';
import './index.css'

const tag = <strong>Olá React!</strong>

ReactDom.render(
    <div>
        { tag }
    </div>, 
    document.getElementById('root')
);