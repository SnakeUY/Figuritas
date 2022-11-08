import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Album from './Componentes/index'

function App() {
  return (
    <div className="App">
      <div className='contenedor'>
        <nav>
          <h1>Figuritas</h1>
        </nav>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Album/>}/>
        </Routes>
        </BrowserRouter>
  
      </div>
    </div>
  );
}

export default App;
