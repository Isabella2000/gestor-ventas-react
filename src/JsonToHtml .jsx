import { useEffect, useState } from "react"
import './index.css'
import CardEmpresaGestora from "./CardEmpresaGestora"
import CardEmpresaClientes from "./CardEmpresaClientes"


const JsonToHtml = () => {
    const [data, setData] = useState({
        empresaGestoraVentas: {},
        empresasClientes: []
    })

    // const productoVendido=data.empresasClientes[0].nombreProducto


    const jsonEmpresa = async () => {
        const result = await fetch("./src/data.json")
        const json = await result.json()
        setData(json)
        // console.log(data.empresasClientes)
    }

    const empresaGestoraVentasJSON = Object.entries(data.empresaGestoraVentas) //convertir el objeto en arreglo
    // console.table(empresaGestoraVentasJSON)

    useEffect(() => {
        jsonEmpresa()
    }, [])
    return (
        <div className="w-100 h-100 flex justify-around items-center m-20 flex-col">

            <div className=" bg-amber-200 rounded-md flex justify-around items-center mb-10 pl-10"
                style={{
                    width: "1400px"
                }}>

                <div className="">
                    <h1 className="text-5xl font-bold pb-6">Gestor{" "}
                        <span className="text-orange-500">Empresarial</span>
                    </h1>

                    <div className="flex justify-around items-start flex-col capitalize ">
                        {
                            empresaGestoraVentasJSON.map((e, index) => <CardEmpresaGestora key={index} e={e} />)
                        }
                    </div>
                </div>

                <img src="https://yellowdesk.imgix.net/images/Yellow-Desk-Cowork_Finals_SimonShiff_0-31.jpg?crop=focalpoint&domain=yellowdesk.imgix.net&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=675&ixlib=php-3.3.1&q=82&w=1200&s=35ad89d58472093427c58e6b5643bd82" alt="" className="w-2/4 py-10" style={{ borderRadius: "20px" }} />
            </div>


            {/* Empresas clientes */}
            <h1 className="text-5xl font-bold py-6">Empresas{" "}
                <span className="text-orange-500">Clientes</span>
            </h1>

            <div className="flex justify-center items-center text-end" style={{
                width: "900px"
            }}>

                {/* carrusel */}
                {/* <div id="carouselExampleIndicators" className="carousel slide flex justify-center items-center" style={{
                    width: "1000px"

                }}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src="https://www.obsbusiness.school/sites/obsbusiness.school/files/images/trabajo-en-equipo.jpg" className="d-block w-4/5 rounded-lg" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://blog.interfell.com/hubfs/como%20crear%20un%20equipo%20de%20trabajo%20fuerte%20y%20estable.jpg" className="d-block w-4/5 rounded-lg" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://universidaddelsur.edu.mx/unisur/wp-content/uploads/2021/02/23-copia.webp" className="d-block w-4/5 rounded-lg" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}


                <div className=" w-4/5" style={{
                    // width: "500px"
                }}>
                    {
                        data.empresasClientes.map((d) => <CardEmpresaClientes key={d.nombreEmpresa} d={d} />)
                    }
                </div>
                

            </div>
            {/* <h3 className="font-serif text-orange-700 font-semibold mt-5">BY: Isabella Collante Mendez</h3> */}
        </div>
    )
}

export default JsonToHtml 