import React from 'react'
import alunos from '../../data/alunos'


export default (props) => {

    const alunosLis = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} {aluno.nota}

            </li>
        )
    })
    return (
        <div>
            <ul style={{listStyle: "none"}}>{alunosLis}</ul>
        </div>
    )
}