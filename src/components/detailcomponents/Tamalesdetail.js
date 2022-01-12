import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buy } from "../../actions/buyAction";
import { listarProductosAction } from "../../actions/listarProductosAction";
import {
  Atrasimg,
  Bebidaindv,
  Botonagregar,
  Checkbox,
  Descriptionguajolocombo,
  Divbebidaindint,
  Divbebidasdetail,
  Divbebidaycheck,
  Divbotonagregarcarrito,
  Divdetailnameprice,
  Divguajolocombo,
  Divimagedetail,
  Divmayormenor,
  Divsabores,
  Divsaboresint,
  Divsuperbebidasdetail,
  Divtextoguajolocombo,
  Imagedetail,
  Imgbebidaind,
  Imgmayus,
  Imgminus,
  Nombreproductodetail,
  Pnombrebebidaind,
  Ppreciobebidaind,
  Pricedetail,
  Psabor,
  Saboresinfer,
  Saboressuper,
  Sabormole,
  Shoptemplate,
  Spinner,
  Textagregaral,
  Tituloguajolocombo,
} from "../../styles/template";
import Shop from "../Shop";

const Tamalesdetail = () => {
  const productos = useSelector((state) => state.listar.productos);
  const { id } = useParams();
  console.log(id);

  const redirectHome = useNavigate();
  
  const dispatch = useDispatch();
  console.log(productos);
  useEffect(() => {
    if (!productos.length) return dispatch(listarProductosAction());
  }, [dispatch, productos]);

  if (!productos.length) return <div>Cargando...</div>;

  const [detailGuajolota] = productos.filter((producto) => {
    return producto.id === id;
  });

  const bebidas = productos.filter((producto) => {
    return producto.categoria === "bebidas";
  });
  console.log(bebidas);

  const Addtocart = (id) => {
        const productocarrito = productos.find(producto => producto.id === id)
        dispatch(buy(productocarrito))
  }

  return (
    <div>
      <Atrasimg
        src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1641748945/Guajolotasdef/navbar/atras_hn1uam.svg"
        alt="come back"
        onClick={() => redirectHome("/")}
      />
      <Shop/>
      <Divimagedetail>
        <Imagedetail src={detailGuajolota.imagen} />
      </Divimagedetail>
      <Divdetailnameprice>
        <Nombreproductodetail>{detailGuajolota.nombre}</Nombreproductodetail>
        <Pricedetail>$ {detailGuajolota.precio} MXN</Pricedetail>
      </Divdetailnameprice>
      <Divmayormenor>
        <Imgminus src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1641760446/Guajolotasdef/navbar/minus_qzu4ah.svg" />
        <p>1</p>
        <Imgmayus src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1641760390/Guajolotasdef/navbar/mayus_kdqyic.svg" />
      </Divmayormenor>
      <Divsabores>
        <Psabor>Sabor</Psabor>
        <Divsaboresint>
          <Saboressuper>
            <Sabormole src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1641837283/Guajolotasdef/sabores/saborverde_kzqbtk.svg" />
            <Sabormole src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1641837283/Guajolotasdef/sabores/sabormole_kgmacw.svg" />
            <Sabormole src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1641837283/Guajolotasdef/sabores/saborrajas_x5adff.svg" />
          </Saboressuper>

          <Saboresinfer>
            <Sabormole src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1641837283/Guajolotasdef/sabores/saborpi%C3%B1a_prtth6.svg" />
            <Sabormole src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1641837283/Guajolotasdef/sabores/saborpasas_azhxth.svg" />
            <Sabormole src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1641837283/Guajolotasdef/sabores/saborguayaba_bjik4s.svg" />
          </Saboresinfer>
        </Divsaboresint>
      </Divsabores>
      <Divguajolocombo>
        <Divtextoguajolocombo>
          <Tituloguajolocombo>Guajolocombo</Tituloguajolocombo>
          <Descriptionguajolocombo>
            Selecciona la bebida que más te guste y disfruta de tu desayuno.
          </Descriptionguajolocombo>
        </Divtextoguajolocombo>

        <Divbebidasdetail>
          <Divsuperbebidasdetail>
            {bebidas.map((bebida) => (
              <Bebidaindv key={bebida.id}>
                  <Divbebidaycheck>
                  <Imgbebidaind src={bebida.imagen} />
                {/* <Checkbox></Checkbox> */}
                  </Divbebidaycheck>
                
                <Divbebidaindint>
                  <Pnombrebebidaind>{bebida.nombre}</Pnombrebebidaind>
                  <Ppreciobebidaind>$ {bebida.precio} MXN</Ppreciobebidaind>
                </Divbebidaindint>
              </Bebidaindv>
            ))}
          </Divsuperbebidasdetail>
        </Divbebidasdetail>
      </Divguajolocombo>
      <Divbotonagregarcarrito>
        <Botonagregar onClick={() => Addtocart(detailGuajolota.id)}>
            <Textagregaral>Agregar al carrito</Textagregaral>
        </Botonagregar>
      </Divbotonagregarcarrito>
    </div>
  );
};

export default Tamalesdetail;
