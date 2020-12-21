import React, {Fragment} from 'react'
export default function ComParametro(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Desaprovado'
    return(
        <Fragment>
            <h2>{props.Titulo}</h2>
            <p>
                <strong>{ props.aluno }</strong>
                tem nota de 
                <strong>{ props.nota} </strong>
                e esta
                <strong>{status}</strong>
            </p>
        </Fragment>
    )

}