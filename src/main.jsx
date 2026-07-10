import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { ProductProvider2 } from './context/ProductContext2.jsx'
// import App from './App.jsx'
// import Layout from './Layout'
// import Playground from './Playground.jsx'
// import Blogger from './Blogger.jsx'
// import Banking from './Banking.jsx'
// import Invento from './Invento.jsx'
import Meal from './Meal.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Blogger/> */}
    {/* < Playground/> */}
    {/* <Banking/> */}
    {/* <ProductProvider2>
      <Invento />
    </ProductProvider2> */}
    <Meal />  


  </StrictMode>,
)
