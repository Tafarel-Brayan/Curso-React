import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';

const UseRef = (props) => {

    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    const [v1, setV1] = useState("");
    const [v2, setV2] = useState("");
    const [text, setText] = useState("");

    useEffect(()=>{
        mergeAndCount(v1.substr(v1.length - 1));
        myInput2.current.focus();
    }, [v1])

    useEffect(()=>{
        mergeAndCount(v2.substr(v2.length - 1));
        myInput1.current.focus();
    }, [v2])

    function mergeAndCount(string){
        count.current++;
        setText(text + string);
    }

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{text} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input 
                    type="text" 
                    className="input" 
                    value={v1}
                    ref={myInput1} 
                    onChange={ e => setV1(e.target.value) } 
                />
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input
                 type="text"
                 className="input"
                 ref={myInput2}
                 value={v2}
                 onChange={ e => setV2(e.target.value) }
                />

            </div>
        </div>
    )
}

export default UseRef
