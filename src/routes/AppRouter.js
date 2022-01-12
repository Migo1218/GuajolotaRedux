import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import GlobalStyle from "../globalstyles/Globalstyles";
import Guajolotas from "../components/Guajolotas";
import { useDispatch } from "react-redux";
import { listarProductosAction } from "../actions/listarProductosAction";
import Allproducts from "../components/Allproducts";
import Bebidas from "../components/Bebidas";
import Tamales from "../components/Tamales";
import Guajolotadetail from "../components/detailcomponents/Guajolotadetail";
import Carrito from "../components/Carrito";
import Bebidadetail from "../components/detailcomponents/Bebidadetail";
import Tamalesdetail from "../components/detailcomponents/Tamalesdetail";

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listarProductosAction());
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/guajolotas" element={<Guajolotas />} />
          <Route exact path="/guajolotas/:id" element={<Guajolotadetail />} />
          <Route exact path="/carrito" element={<Carrito />} />

          <Route exact path="/bebidas" element={<Bebidas />} />
          <Route exact path="/bebidas/:id" element={<Bebidadetail />} />
          <Route exact path="/tamales" element={<Tamales />} />
          <Route exact path="/tamales/:id" element={<Tamalesdetail />} />
          <Route exact path="/allproducts" element={<Allproducts />} />
        </Routes>
      </BrowserRouter>

      <GlobalStyle />
    </div>
  );
};

export default AppRouter;
