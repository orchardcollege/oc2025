import './App.css'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Contact from './Components/Contact'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/Home' element={<Home/>}/> 
      <Route path='/Movies' element={<Movies/>}/> 
      <Route path='/Contact' element={<Contact/>}/> 
    </Routes> 
    
    </>


  )
}

export default App
