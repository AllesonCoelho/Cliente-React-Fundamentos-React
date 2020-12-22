import React from 'react'

export default props =>{
    return(
        <div>
            <div>
                filho
            </div>
            <button onClick={
                function(e){
                    props.quandoClicar('Joao', 53, true)
                }
            }>Fornecer informacoes</button>


        </div>
    )

}