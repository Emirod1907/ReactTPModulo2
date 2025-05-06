import React from 'react'
import Contador from './Components/Contador/Contador'
import Productos from './Components/Productos/Productos'
import { Route, Routes } from 'react-router-dom'
import { Registro } from './Components/Registro/Registro'
import Login from './Components/Login/Login'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/contador' element={<Contador/>}/>
      <Route path='/productos' element={<Productos/>}/>
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contacto' element={<ContactScreen/>}/>
      <Route path='/producto/:product_id' element={<ProductDetailScreen/>}/>
    </Routes>

  )
}

export default App