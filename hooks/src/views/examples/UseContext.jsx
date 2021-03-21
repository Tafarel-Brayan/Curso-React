import React, { useContext, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {

    const {state, setState} = useContext(DataContext);

    const { text, number, setNumber } = useContext(AppContext);

    
    
    function changeNumber(delta){
        setState({
            ...state,
            number: state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle={"Aceita um objeto de contexto e retorna o valor atual do contexto!"}
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text" > { state.text } </span>
                <span className="text" > { state.number } </span>
            </div>

            <div className="center" >
                <span>
                    <button className="btn" onClick={ () => changeNumber(-1) } >-1</button>
                    <button className="btn" onClick={ ()=> changeNumber(+1) } >+1</button>
                </span>
            </div>

            <SectionTitle title="Exercício #02" />

            <div className="center">
                <span className="text" > {text} </span>
                <span className="text" > { number } </span>
            </div>

            <div className="center" >
                <span>
                    <button className="btn" onClick={ () => setNumber(number -1) } >-1</button>
                    <button className="btn" onClick={ ()=> setNumber(number +1) } >+1</button>
                </span>
            </div>
        </div>
    )
}

export default UseContext