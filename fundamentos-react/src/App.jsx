import React from 'react'

import './index.css'
import './App.css'

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Card from './components/layout/Card';
import Familia from "./components/basicos/Familia";
import FamiliaMembro from './components/basicos/FamiliaMembro';

export default () => {
    return(
        <div className="App" >
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#05 - Componente com Filhos" >
                    <Familia sobrenome="Ferreira" >
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                    </Familia>
                </Card>

                <Card titulo="#04 - Aleatório (não fiz)" >
                    
                </Card>

                <Card titulo="#03 - Fragmento" >
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Com Parâmetro">
                    <ComParametro 
                        titulo="Segundo Componente"
                        subtitulo="Muito Legal!" />
                </Card>

                <Card titulo="#01 - First Component">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}
