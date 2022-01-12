import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Shoptemplate } from '../styles/template'

const Shop = () => {
    const redirectCarrito = useNavigate()
    return (
        <div>
            <Shoptemplate src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png" alt="shop" onClick={() => redirectCarrito('/carrito')}/>
        </div>
    )
}

export default Shop
