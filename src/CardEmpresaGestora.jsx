import React from 'react'
import './index.css'




const CardEmpresaGestora = ({ e }) => {
    return (
        <div>
            <div className='m-4 font-serif text-lg '>
                {/* <h1>empresaGestoraVentas</h1> */}
                <p>⚠️{ e }</p>
            </div>
        </div>
    )
}


export default CardEmpresaGestora

