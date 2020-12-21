import React from 'react'
import Aleatorio from './components/basicos/aleatorio'
import ComParametro from './components/basicos/com_parametro'
import Primeiro from './components/basicos/primeiro'
import Fragmento from './components/basicos/fragmento'
import Card from './components/layouts/card'


export default (props) =>{
    return(
        <div>
            <h1></h1>

            <Card titulo="004 Exemplo de card">
            <Aleatorio min={1} max={30}/>
            </Card>

            <Card titulo="#003 Fragmento">
            <Fragmento/>
            </Card>

            <Card titulo="#002 Com parametro">
            <ComParametro
            titulo="Situacao do aluno"
            aluno="pedro"
            nota={9.2}
            />
            </Card>

            <Card titulo="#001 Primeiro componente">
            <Primeiro/>
            </Card>
        </div>
    )
}