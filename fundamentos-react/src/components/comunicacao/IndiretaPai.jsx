import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";


export default (props) => {

    let [_nome,  setNome ] = useState('?');
    let [_idade, setIdade] = useState(0);
    let [_nerd,  setNerd ] = useState(false );

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (
        <div>
            {_nome} {_idade} {_nerd ? 'Verdadeiro': 'Falso' }
            <IndiretaFilho quandoClicar={fornecerInformacoes}  />
        </div>
    )
}