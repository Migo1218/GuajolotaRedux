import React from 'react'
import { useSelector } from 'react-redux'
import { Divprecioynombre, Divtarjetaindividual, Divtarjetas, Imgtarjeta, Nombreproducto, Precioproducto } from '../styles/template'
import Banner from './Banner'
import { Navbar } from './Navbar'
import Search from './Search'
import Superiorsection from './Superiorsection'

const Bebidas = () => {
    const productos = useSelector(state => state.listar.productos)
    console.log(productos)


    
    
    const productobebidas = productos.filter((producto) => {
        return producto.categoria === "bebidas"
    })

    console.log(productobebidas)
    return (
        <div>
            <Superiorsection/>
            <Banner/>
            <Search/>
            <Navbar/>
            {/* Creación tarjetas */}
            <Divtarjetas>
                {
                    productobebidas && productobebidas.map((producto) => (
                        <Divtarjetaindividual>
                            <Imgtarjeta src={producto.imagen}/>
                            <Divprecioynombre>
                                <Nombreproducto>{producto.nombre}</Nombreproducto>
                                <Precioproducto>$ {producto.precio} MXN</Precioproducto>
                            </Divprecioynombre>
                        </Divtarjetaindividual>
                    ))
                }
            </Divtarjetas>
        </div>
    )
}

export default Bebidas