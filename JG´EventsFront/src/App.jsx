import { Route, Routes } from 'react-router-dom';
import MainPage from './mainpage';
import Seccion15 from './components/Secciones/Seccion15/seccion15';
import SeccionAniv from './components/Secciones/SeccionAniv/seccionAniv';
import SeccionCasamiento from './components/Secciones/SeccionCasamientos/seccionCasamiento';
import SeccionCorp from './components/Secciones/SeccionCorporativos/seccionCorp';
import SeccionOtros from './components/Secciones/SeccionOtros/seccionOtros';
import SeccionRecep from './components/Secciones/SeccionRecep/seccionRecep';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/seccion15" element={<Seccion15 />} />
      <Route path="/seccionAniv" element={<SeccionAniv />} />
      <Route path="/seccionCasamiento" element={<SeccionCasamiento />} />
      <Route path="/seccionCorp" element={<SeccionCorp />} />
      <Route path="/seccionOtros" element={<SeccionOtros />} />
      <Route path="/seccionRecep" element={<SeccionRecep />} />
    </Routes>
  );
}

export default App;
