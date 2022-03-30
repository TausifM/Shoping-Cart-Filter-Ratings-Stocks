import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Context from './context/Context';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Context>      
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
