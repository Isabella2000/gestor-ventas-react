import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import JsonToHtml from './JsonToHtml .jsx'
import CardEmpresaClientes from './CardEmpresaClientes.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <JsonToHtml />
  },
  {
    path: "/clientes",
    element: <CardEmpresaClientes />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
