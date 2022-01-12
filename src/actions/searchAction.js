import { types } from "../types/types"
import { collection,getDocs,query,where} from "@firebase/firestore";
import { db } from "../firebase/firebase";

//BUSQUEDA

export const searchAsyn = (producto) => {

    return async(dispatch) => {
       
        const productos = collection(db,"productosguajolotas");
        console.log(productos)
        const q = query(productos,where("nombre","==",producto))
        console.log(q)
        
        const datos = await getDocs(q);
        console.log(datos)
        const productoM = [];
        datos.forEach((docu) => {
            console.log(docu)
            productoM.push(docu.data())
        }) 
        console.log(productoM)
        dispatch(searchSync(productoM))
    }
}


export const searchSync = (busqueda) => {
    return{
        type: types.search,
        payload: busqueda
    }
}