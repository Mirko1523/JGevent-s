import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/home'
import Nosotros from './components/Nosotros/nosotros'
import Eventos from './components/Eventos/eventos'
import Contactanos from './components/Contacto/contacto'
function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/contacto" element={<Contactanos />} />
    </Routes>
  )
}

export default App
