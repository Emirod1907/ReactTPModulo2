import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Registro } from './Components/Registro/Registro'
import Login from './Components/Login/Login'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/producto/:product_id' element={<ProductDetailScreen/>}/>
    </Routes>

  )
}

export default App