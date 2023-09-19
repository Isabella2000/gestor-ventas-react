import React from "react";
import "./index.css";

const CardEmpresaClientes = ({ d }) => {
  // console.log(d.productosVendidos.cantidadVendida)
  return (
    <div className="bg-orange-300 p-9 m-5 rounded-lg flex-col flex justify-center items-end text-end w-100">
      <div className="flex gap-3">
        <div>
          {d.nombreEmpresa == "Empresa X" ? (
            <img src="https://i.pinimg.com/564x/3a/e0/9f/3ae09fddd515eccabca8386fa131f6b4.jpg" alt="img de Elena" className="rounded-md w-60" />
          ) : (
            <img src="https://i.pinimg.com/564x/10/38/9f/10389f4329b05c6306a20a139d61e753.jpg" alt="img de Luis" className="rounded-md w-60 h-80"  />
          )}
        </div>
        <div>
          <p className="font-bold text-4xl mb-3">{d.nombreEmpresa} </p>
          <p className="font-serif">{d.direccion} </p>
          <p className="font-serif">{d.telefono} </p>
          <br />
          <p className="text-xl font-semibold mb-2">Contacto!!</p>
          <p className="font-serif">{d.contacto.nombre} </p>
          <p className="font-serif">{d.contacto.email} </p>
          <p className="font-serif">{d.contacto.telefono} </p>
          <br />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-xl font-semibold mb-3 text-center">Productos!!</p>
        <div className="flex w-full justify-around px-4 gap-5">
          <div className="bg-orange-100 w-auto p-2 rounded-md">
            <p className="font-serif font-semibold">
              {d.productosVendidos[0].nombreProducto}{" "}
            </p>

            <p className="font-serif text-orange-400">
              Precio unitario:
              <span className="text-black">
                {" "}
                {d.productosVendidos[0].precioUnitario}{" "}
              </span>
            </p>

            <p className="font-serif text-orange-400">
              Productos vendidos:
              <span className="text-black">
                {" "}
                {d.productosVendidos[0].cantidadVendida}{" "}
              </span>
            </p>
          </div>
          <div className="bg-orange-100 w-auto p-2 rounded-md">
            <p className="font-serif font-semibold">
              {d.productosVendidos[1].nombreProducto}{" "}
            </p>
            <p className="font-serif text-orange-400">
              Precio unitario:
              <span className="text-black">
                {" "}
                {d.productosVendidos[1].precioUnitario}{" "}
              </span>
            </p>

            <p className="font-serif text-orange-400">
              Productos vendidos:
              <span className="text-black">
                {" "}
                {d.productosVendidos[1].cantidadVendida}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEmpresaClientes;
