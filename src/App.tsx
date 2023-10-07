import './App.css'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';


function App() {


  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App;