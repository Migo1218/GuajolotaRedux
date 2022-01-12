import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Divprecioynombre, Divtarjetaindividual, Divtarjetas, Imgtarjeta, Nombreproducto, Precioproducto } from '../styles/template'
import Banner from './Banner'
import { Navbar } from './Navbar'
import Search from './Search'
import Superiorsection from './Superiorsection'

const Guajolotas = () => {
    const productos = useSelector(state => state.listar.productos)
    console.log(productos)

    const navigate = useNavigate()

    const redirectDetail = (id) => {
        console.log(id)
        navigate(`/guajolotas/${id}`)
    }


    
    
    const productoguajolota = productos.filter((producto) => {
        return producto.categoria === "guajolotas"
    })

    console.log(productoguajolota)
    return (
        <div>
            <Superiorsection/>
            <Banner/>
            <Search/>
            <Navbar/>
            {/* Creación tarjetas */}
            <Divtarjetas>
                {
                    productoguajolota && productoguajolota.map((producto) => (
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

export default Guajolotas
