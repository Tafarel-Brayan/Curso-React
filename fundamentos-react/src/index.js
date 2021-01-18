import React from 'react'
import ReactDom from 'react-dom';
import './index.css'

import Primeiro from "./components/basicos/Primeiro";

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
    </div>,
    document.getElementById('root')
);