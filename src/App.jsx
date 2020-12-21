import React from 'react'
import Aleatorio from './components/basicos/aleatorio'
import ComParametro from './components/basicos/com_parametro'
import Primeiro from './components/basicos/primeiro'
import Fragmento from './components/basicos/fragmento'


export default (props) =>{
    return(
        <div>
            <h1></h1>
            <Aleatorio min={1} max={30}/>
            <Fragmento/>
            
            <ComParametro
            titulo="Situacao do aluno"
            aluno="pedro"
            nota={9.2}
            />
            

            
            <Primeiro/>
        </div>
    )
}