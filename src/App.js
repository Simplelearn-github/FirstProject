
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path='/' element={<Login/>}  />
    <Route path='/Home/*' element={<Home/>}  />
   </Routes>

    </div>
  );
}

export default App;
