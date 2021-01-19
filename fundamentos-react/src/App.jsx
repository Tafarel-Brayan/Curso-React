import React from 'react'

import './index.css'
import './App.css'

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Card from './components/layout/Card';

export default () => {
    return(
        <div className="App" >
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="First Component">
                    <Primeiro></Primeiro>
                </Card>
                
                <Card titulo="Com Parâmetro">
                    <ComParametro 
                        titulo="Segundo Componente"
                        subtitulo="Muito Legal!" />
                </Card>

                <Card titulo="Fragmento" >
                    <Fragmento></Fragmento>
                </Card>
            </div>
        </div>
    )
}
