import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Children } from 'react'
import Singles from './Singles'
import Home from './Component/Home'
import Product from './Component/Product'
import Routing from './Component/Routing'

import SingleProduct from './Component/SingleProduct'
import Carts from './Component/Carts'
import Checkout from './Component/Checkout'
import Clothes from './Component/Clothes'
import About from './Component/About'
import Contact from './Component/Contact'
function App() {
  const [count, setCount] = useState(0)

const router= createBrowserRouter([
 {path:"/",

     element: <>  <Singles/> </> ,

  
     
children:[  
  
    {path:"/",


      element:<> <Home/> </>
 
    },
       {path:"/Contact",


      element:<> <Contact/> </>
 
    },    {path:"/About",


      element:<> <About/> </>
 
    },
   
        {path:"/product",


      element:<> <Product/> </>
 
    },

        {path:"/category",


      element:<> <Routing/> </>
 
    },
        {path:"/product/:idd",


      element:<> <SingleProduct/> </>
 
    },   {path:"/Clothes/:ids",


      element:<> <Clothes/> </>
 
    },
      {path:"/Cart",


      element:<> <Carts/> </>
 
    },
       {path:"/checkout",


      element:<> <Checkout/> </>
 
    },
    ]
  
  
 }


      
])





  return (
    <>
<RouterProvider router={router}/>


    </>
  )
}

export default App
