import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Logotemplate } from '../styles/template'
import logo from '../img/logo.jpeg'



const Logo = () => {

   

   
    const redirectHome = useNavigate()

    return (
        <div>
          
            <Logotemplate src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1641515169/Guajolotasdef/navbar/logo_e4zwrn.svg" alt="logo" onClick={() => redirectHome('/')}/>
           
            
        </div>
    )

}

export  default Logo;