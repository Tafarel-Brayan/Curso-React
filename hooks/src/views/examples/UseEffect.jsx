import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    let n = parseInt(num)
    if (n < 0) return -1
    if (n === 0 ) return 1

    return calcFatorial( n - 1) * n
}

const UseEffect = (props) => {

    // Exercicio 1
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    useEffect(()=>{
        setFatorial(calcFatorial(number))
    }, [number]);

    // Exercicio 2
    const [parImpar, setParImpar] = useState(1);
    

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />

            <div className="center">

                <input type="number" className="input" value={number} onChange={ (e) => setNumber( e.target.value ) } />

                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                </div>

            </div>

            <SectionTitle title="Exercício #01" />

            <div className="center">

                <input type="number" className="input" value={parImpar} onChange={ (e) => setParImpar( e.target.value ) } />

                <div>
                    <span className="text">Par/Impar: </span>
                    <span className="text red">{(parImpar % 2)===0 ? 'Par' : "Impar"}</span>
                </div>

            </div>

        </div>
    )
}

export default UseEffect
