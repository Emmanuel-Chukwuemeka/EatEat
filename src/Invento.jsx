import React from 'react'
import './assets/css/app.css'
import Create from './invento_components/Create'
import Footer from './invento_components/Footer'
import Products from './invento_components/Products'
import Header from './invento_components/Header'


const Invento = () => {


  
  return (
    <div className='container'> 
      <Header />
      <Products />
      <Create />
      <Footer />  
      
    </div>
  )
}

export default Invento
