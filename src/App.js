import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className = "App">
      <BrowserRouter>
       <Navbar/>
       <Home/>
     </BrowserRouter>
    </div>
  );
}

export default App;
