import React from 'react'
import IndiretaFilho from './indireta_filho'

export default props =>{
    let nome = '?'
    let idade = 0
    let nerd = false

    function fornecerInformacoes(nome, idade, nerd){
        console.log(nome, idade, nerd)
    }
    return(
        <div>
            <div>
                <span>{nome}</span>
                <span><strong>{idade}</strong></span>
                <span>{nerd ? 'Veradde' : 'Falso'}</span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>

        </div>
    )

}