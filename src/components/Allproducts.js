import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchAsyn } from "../actions/searchAction";
import { Cancelsearch, Divintsearch, Divprecioynombre, Divsearchallproducts, Divtarjetaindividual, Divtarjetas, Divtarjetasallproducts, Imgtarjeta, Nombreproducto, Precioproducto,  } from "../styles/template";

const Allproducts = () => {
    const productos = useSelector(state => state.listar.productos)
     const dispatch = useDispatch()
    const redirectHome = useNavigate()

    const formik = useFormik({
        initialValues: {
            search: "",
          },
      
          onSubmit: ({ search }) => {
            console.log(search);
            dispatch(searchAsyn(search));
          },
    })
  return (
    <div>
      
      <form onSubmit={formik.handleSubmit}>
        <Divsearchallproducts>
          <Divintsearch name="search" onChange={formik.handleChange}/>
          <Cancelsearch onClick={()=>redirectHome('/')}>
              Cancelar
          </Cancelsearch>
        </Divsearchallproducts>
      </form>

      <Divtarjetasallproducts>
                {
                    productos.map((producto) => (
                        <Divtarjetaindividual>
                            <Imgtarjeta src={producto.imagen}/>
                            <Divprecioynombre>
                                <Nombreproducto>{producto.nombre}</Nombreproducto>
                                <Precioproducto>{producto.precio} MXN</Precioproducto>
                            </Divprecioynombre>
                        </Divtarjetaindividual>
                    ))
                }
            </Divtarjetasallproducts>

    </div>
  );
};

export default Allproducts;
