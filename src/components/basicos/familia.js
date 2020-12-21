import React from 'react'
import FamiliaMembro from './familiamembro'

export default props =>{
    return(
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Gustavo" {...props}/>
            <FamiliaMembro nome="Ana" sobrenome="Silva"/>

        </div>
    )
}