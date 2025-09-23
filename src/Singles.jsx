import React from 'react'
import {Navbar} from './Component/Navbar'
import { Outlet } from 'react-router'
import Footer from './Component/Footer'

const Singles = () => {
   return( 
 <>
 
 <Navbar />
 <Outlet />
 <Footer/>
 
 </>
   )

}

export default Singles
