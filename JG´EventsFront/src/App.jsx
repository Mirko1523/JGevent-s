import { Route, Routes } from 'react-router-dom';
import MainPage from './mainpage';
import Seccion15 from './components/Seccion15/seccion15';
import Home from './components/Home/home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/seccion15" element={<Seccion15 />} />
    </Routes>
  );
}

export default App;
