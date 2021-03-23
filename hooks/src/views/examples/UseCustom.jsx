import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useFetch } from '../../hooks/useFectch';

const UseRef = (props) => {

    const url = 'http://files.cod3r.com.br/curso-react/estados.json';

    /** useFectch é meu hook criado */
    const response = useFetch(url, 'get');

    function showStates(states){
        return states.map(
            state => <li key={state.nome} >{state.nome} - {state.sigla}</li>
        )
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <ul>
                {
                    response.data ? showStates(response.data) : <li>Lista Vazia</li>
                }
            </ul>
        </div>
    )
}

export default UseRef
