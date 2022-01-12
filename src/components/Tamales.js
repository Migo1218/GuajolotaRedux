import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Divprecioynombre, Divtarjetaindividual, Divtarjetas, Imgtarjeta, Nombreproducto, Precioproducto } from '../styles/template'
import Banner from './Banner'
import { Navbar } from './Navbar'
import Search from './Search'
import Superiorsection from './Superiorsection'

const Tamales = () => {
    const productos = useSelector(state => state.listar.productos)
    console.log(productos)


    const navigate = useNavigate()

    const redirectDetail = (id) => {
        navigate(`/tamales/${id}`)
    }
    
    const productotamales = productos.filter((producto) => {
        return producto.categoria === "tamales"
    })

    console.log(productotamales)
    return (
        <div>
            <Superiorsection/>
            <Banner/>
            <Search/>
            <Navbar/>
            {/* Creación tarjetas */}
            <Divtarjetas>
                {
                    productotamales && productotamales.map((producto) => (
                        <Divtarjetaindividual key={producto.id} onClick={() => redirectDetail(producto.id)}>
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

export default Tamales