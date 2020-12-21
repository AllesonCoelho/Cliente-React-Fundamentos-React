import React, {cloneElement} from 'react'

export default props =>{
    return(
        <div>
            {
                props.children((child, i) => {
                    return cloneElement(child, {...props, key : i})
                })
            
            }
        </div>
    )
}