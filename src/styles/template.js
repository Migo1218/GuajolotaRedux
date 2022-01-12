import styled from "styled-components";

export const Logotemplate = styled.img`
  position: absolute;
  width: 64px;
  height: 64px;
  left: 24px;
  top: 24px;
`;

export const Shoptemplate = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 312px;
  top: 44px;
`;

export const Bannerstyle = styled.p`
  position: absolute;
  width: 312px;
  height: 123px;
  left: 28px;
  top: 120px;

  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 41px;

  /* Black */

  color: #0d0d0d;
`;

export const Divnavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 312px;
  height: 32px;
  left: 24px;
  top: 375px;
`;

export const Navstyle = styled.nav`
  .header {
    text-align: center;
    color: rgb(173, 69, 69);
    padding: 0.3%;
    font-size: 120%;
  }

  .header nav {
    display: inline-block;
    justify-content: center;
    padding-left: 10%;
    padding-right: 10%;
  }

  .link {
    text-decoration: none;
    letter-spacing: 5px;
    padding-right: 10%;
  }

  .link:hover {
    color: tomato;
  }
`;

export const Divtarjetas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 312px;
  height: 592px;
  left: 24px;
  top: 431px;
`;

export const Divtarjetaindividual = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;

  position: static;
  width: 312px;
  height: 112px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  /* shadow-1 */

  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
`;

export const Imgtarjeta = styled.img`
  position: static;
  width: 80px;
  height: 80px;
  left: 16px;
  top: 16px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
`;

export const Divprecioynombre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;

  position: static;
  width: 184px;
  height: 46px;
  left: 112px;
  top: 33px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
  margin: 0px 16px;
`;

export const Nombreproducto = styled.p`
  position: static;
  width: 184px;
  height: 21px;
  left: 0px;
  top: 0px;

  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;

  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  /* identical to box height */

  /* Black */

  color: #0d0d0d;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;
`;

export const Precioproducto = styled.p`
  position: static;
  width: 184px;
  height: 17px;
  left: 0px;
  top: 29px;

  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #fa4a0c;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;
`;

export const Divsearch = styled.div`
  position: absolute;
  width: 312px;
  height: 60px;
  left: 40px;
  top: 290px;
`;

export const Divintsearch = styled.input`
  position: absolute;
  width: 100%;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #e7e7e7;
  border-radius: 30px;
`;

export const Divsearchallproducts = styled.div`
  position: absolute;
  width: 219px;
  height: 60px;
  left: 24px;
  top: 44px;
`;

export const Cancelsearch = styled.div`
  position: absolute;
  width: 73px;
  height: 21px;
  left: 263px;
  top: 20px;

  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;

  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  /* identical to box height */

  /* Black */

  color: #0d0d0d;
`;

export const Divtarjetasallproducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 312px;
  height: 592px;
  left: 24px;
  top: 150px;
`;

export const Atrasimg = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 24px;
  top: 44px;
`;

export const Divimagedetail = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 80px;
  top: 0px;
`;
export const Imagedetail = styled.img`
  position: absolute;
  width: 165.83px;
  height: 165.83px;
  left: 25px;
  top: 17.41px;
`;
export const Divdetailnameprice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 312px;
  height: 90px;
  left: 24px;
  top: 200px;
`;

export const Nombreproductodetail = styled.p`
  width: 312px;
  height: 68px;
  left: 0px;
  top: 0px;

  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;

  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  text-align: center;

  /* Black */

  color: #0d0d0d;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: -40px 0px;
`;

export const Pricedetail = styled.p`
  position: static;
  width: 99px;
  height: 27px;
  left: 106.5px;
  top: 100px;

  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  text-align: center;

  color: #fa4a0c;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
`;

export const Divmayormenor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;

  position: absolute;
  width: 190px;
  height: 72px;
  left: 85px;
  top: 335px;

  background: #ffffff;
  /* shadow-1 */

  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;

export const Imgminus = styled.img`
  position: static;
  width: 40px;
  height: 40px;
  left: 16px;
  top: 16px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 32px;
`;

export const Imgmayus = styled.img`
  position: static;
  width: 40px;
  height: 40px;
  left: 134px;
  top: 16px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 32px;
`;

export const Spinner = styled.div`
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #09f;

    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Divsabores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 312px;
  height: 234px;
  left: 24px;
  top: 447px;
`;

export const Psabor = styled.p`
  position: static;
  width: 58px;
  height: 24px;
  left: 0px;
  top: 0px;

  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  /* Black */

  color: #0d0d0d;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 24px 0px;
`;

export const Divsaboresint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 312px;
  height: 186px;
  left: 0px;
  top: 48px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 0px;
`;

export const Sabormole = styled.img`
  position: static;
  width: 64px;
  height: 69px;
  left: 248px;
  top: 0px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 20px;
`;

export const Saboressuper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 200px;
  height: 80px;
  left: 0px;
  top: 0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const Saboresinfer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 296px;
  height: 69px;
  left: 0px;
  top: 117px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const Divguajolocombo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 312px;
  height: 382px;
  left: 22px;
  top: 721px;
`;

export const Divtextoguajolocombo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 312px;
  height: 74px;
  left: 0px;
  top: 0px;
`;

export const Tituloguajolocombo = styled.p`
  position: static;
  width: 140px;
  height: 24px;
  left: 0px;
  top: 0px;

  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  /* Black */

  color: #0d0d0d;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
`;

export const Descriptionguajolocombo = styled.p`
  position: static;
  width: 312px;
  height: 42px;
  left: 0px;
  top: 32px;

  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 138.84%;
  /* or 21px */

  letter-spacing: 0.02em;

  /* Black */

  color: #0d0d0d;

  opacity: 0.5;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
`;

export const Divbebidasdetail = styled.div`
  /* display: flex;
flex-direction: column; */
  display: grid;
  grid-template-columns: 150px 150px;
  
  align-items: flex-start;
  /* padding: 0px;

  position: static;
  width: 312px;
  height: 284px;
  left: -10px;
  top: 10px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 22px -25px; */
`;

export const Divsuperbebidasdetail = styled.div`
  /* display: flex;
flex-direction: row; */
  display: grid;
  grid-template-columns: 200px 200px;
  grid-gap: 15px;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 300px;
  height: 138px;
  left: 0px;
  top: 0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;



export const Bebidaindv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;

  position: static;
  width: 132px;
  height: 118px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const Imgbebidaind =styled.img`
position: static;
width: 64px;
height: 64px;
left: 0px;
top: 0px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 8px;`

export const Divbebidaindint = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 0px;

position: static;
width: 120px;
height: 34px;
left: 16px;
top: 88px;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 8px 0px;`

export const Pnombrebebidaind = styled.p`
position: static;
width: 120px;
height: 15px;
left: 0px;
top: 0px;

font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
/* identical to box height */


/* Black */

color: #0D0D0D;


/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 4px 0px;`

export const Ppreciobebidaind = styled.p`
position: static;
width: 120px;
height: 15px;
left: 0px;
top: 19px;

font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
/* identical to box height */


color: #FA4A0C;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 8px 0px;`

export const Divbotonagregarcarrito = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px 24px;

position: absolute;
width: 360px;
height: 101px;
right: -20px;
top:1200px;
bottom: 0px;

background: rgba(242, 242, 242, 0.01);
backdrop-filter: blur(48px);`

export const Botonagregar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px;

position: static;
width: 312px;
height: 69px;
left: 24px;
top: 16px;

/* Primary */

background: #FA4A0C;
border-radius: 40px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 10px 0px;`

export const Textagregaral = styled.p`
position: static;
width: 176px;
height: 21px;
left: 24px;
top: 24px;

font-family: "Gill Sans Extrabold", Helvetica, sans-serif;

font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 21px;
/* identical to box height */

text-align: right;

color: #F6F6F9;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 33px;`

export const Checkbox = styled.div`
position: absolute;
left: 12.5%;
right: 12.5%;
top: 12.5%;
bottom: 12.5%;

/* Black */

border: 2px solid #0D0D0D;`

export const Divbebidaycheck = styled.div`display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px;

position: static;
width: 120px;
height: 64px;
left: 16px;
top: 16px;


/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 8px 0px;`
