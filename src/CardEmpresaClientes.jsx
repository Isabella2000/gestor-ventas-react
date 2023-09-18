import React from 'react'
import './index.css'


const CardEmpresaClientes = ({ d }) => {

    // console.log(d.productosVendidos.cantidadVendida)
    return (
        <div>
            <div className='bg-orange-300 p-9 m-5 rounded-lg flex-col flex justify-center items-end'>
                <p className='font-bold text-4xl mb-3'>{d.nombreEmpresa} </p>

                <p className='font-serif'>{d.direccion} </p>
                <p className='font-serif'>{d.telefono} </p>
                <br />

                <p className='text-xl font-semibold mb-2'>Contacto!!</p>
                <p className='font-serif'>{d.contacto.nombre} </p>
                <p className='font-serif'>{d.contacto.email} </p>
                <p className='font-serif'>{d.contacto.telefono} </p>
                <br />

                <p className='text-xl font-semibold mb-2'>Productos!!</p>
                <div className='flex w-100  justify-between'>
                    <div className='bg-orange-100 w-auto p-2 rounded-md'>
                        <p className='font-serif font-semibold'>{d.productosVendidos[0].nombreProducto} </p>
                        <p className='font-serif text-orange-400'>Precio unitario:
                            <span className='text-black'> {d.productosVendidos[0].precioUnitario} </span></p>

                        <p className='font-serif text-orange-400'>Productos vendidos:
                            <span className='text-black'> {d.productosVendidos[0].cantidadVendida} </span></p>

                    </div>
                    <div className='bg-orange-100 w-auto p-2 rounded-md'>
                        <p className='font-serif font-semibold'>{d.productosVendidos[0].nombreProducto} </p>
                        <p className='font-serif text-orange-400'>Precio unitario:
                            <span className='text-black'> {d.productosVendidos[0].precioUnitario} </span></p>

                        <p className='font-serif text-orange-400'>Productos vendidos:
                            <span className='text-black'> {d.productosVendidos[0].cantidadVendida} </span></p>

                    </div>


                </div>


            </div>
        </div>
    )
}


export default CardEmpresaClientes