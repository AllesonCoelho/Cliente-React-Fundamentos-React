import React from 'react'
import DiretaFilho from './direta_filho'

export default props =>{
    return(
        <div>
            <DiretaFilho nome="Lucas" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Gabriel" idade={17} nerd={false}></DiretaFilho>


        </div>
    )

}