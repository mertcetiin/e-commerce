import './App.css'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Login from './components/Login';
import Favorite from './components/Favorite';
import Basket from './components/Basket';
import SignUp from './components/SignUp';


function App() {

  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App;