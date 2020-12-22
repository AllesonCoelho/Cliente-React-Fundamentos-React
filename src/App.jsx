import React from 'react'
import './app.css'


import UsarioInfo from './components/condicional/usuario_info'
import ParImpar from './components/condicional/par_impar'
import TabelaProdutos from './components/repeticao/tabela_produtos'
import ListaAlunos from './components/repeticao/lista_alunos'
import Familia from './components/basicos/familia'
import FamiliaMembro from './components/basicos/familiamembro'

import Aleatorio from './components/basicos/aleatorio'
import ComParametro from './components/basicos/com_parametro'
import Primeiro from './components/basicos/primeiro'
import Fragmento from './components/basicos/fragmento'
import Card from './components/layouts/card'





export default () => {
    return (
        <div className="App">
            <h1></h1>

            <div className="Cards">

            <Card titulo="#008 Renderizacao Condicional" color="#982395">
                    <ParImpar numero={20}></ParImpar>
                    <UsarioInfo usuario={{nome: 'Fernando'}}/>
                    <UsarioInfo usuario={{email: 'fe@nando.com'}}/>
                </Card>


            <Card titulo="#007 Repeticao" color="#3A9AD9">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

            <Card titulo="#006 Repeticao" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

            <Card titulo="#005 Componentes com filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Gustavo"/>
                    <FamiliaMembro nome="Ana"/>
                    </Familia>
                    
                </Card>

                <Card titulo="#004 Aleaotorio" color="#FA6900">
                    <Aleatorio min={1} max={30} />
                </Card>

                <Card titulo="#003 Fragmento" color="#E94C8F">
                    <Fragmento />
                </Card>

                <Card titulo="#002 Com parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Situacao do aluno"
                        aluno="pedro"
                        nota={9.2}
                    />
                </Card>

                <Card titulo="#001 Primeiro componente" color="#588C73">
                    <Primeiro />
                </Card>

            </div>


        </div>
    )
}