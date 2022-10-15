import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navigation/navbar';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
