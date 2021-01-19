import React from "react";
import alunos from "../../data/alunos";

export default () => {

    const list = alunos.map( (aluno) => {
        return(
            <li key={aluno.id} >
                {aluno.id} - {aluno.nome}: { aluno.nota }
            </li>
        )
    })

    return(
        <div>
            <ul style={{ listStyle: 'none', padding :0}} >
                {list}
            </ul>
        </div>
    )

}