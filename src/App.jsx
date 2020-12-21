import React from 'react'
import ComParametro from './components/basicos/com_parametro'
import Primeiro from './components/basicos/primeiro'
import Fragmento from './components/basicos/fragmento'


export default (props) =>{
    return(
        <div>
            <Fragmento/>
            
            <ComParametro
            titulo="Situacao do aluno"
            aluno="pedro"
            nota={9.9}
            />
            

            
            <Primeiro/>
        </div>
    )
}