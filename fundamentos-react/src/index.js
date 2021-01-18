import React from 'react'
import ReactDom from 'react-dom';
import './index.css'

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Segundo Componente"
            subtitulo="Muito Legal!" />
        <Fragmento></Fragmento>
    </div>,
    document.getElementById('root')
);