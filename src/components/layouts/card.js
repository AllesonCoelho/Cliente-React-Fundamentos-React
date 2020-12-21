import Card from './card.css'
import React from 'react'


export default props =>{
    return(
        <div className="Card"> Conteudo
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}