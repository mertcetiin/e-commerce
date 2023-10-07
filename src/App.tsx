import './App.css'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Login from './components/Login';


function App() {


  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;