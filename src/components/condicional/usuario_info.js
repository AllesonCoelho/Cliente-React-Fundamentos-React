import React from 'react'
import If, { Else } from './if'

export default props => {

    const usuario = props.usuario || {}
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
                <p>Seja bem vindo</p> <strong>{usuario.nome}</strong>

            </If>

            <If test={!usuario || !usuario.nome}>
                <p>Seja bem vindo</p> <strong>Amigao</strong>

            </If> */}

            <If test={usuario && usuario.nome}>
                <p>Seja bem vindo</p><strong>{usuario.nome}</strong>

                <Else>
                    <p>Seja bem vindo</p> <strong>Amigao</strong>
                </Else>

            </If>

        </div>
    )
}