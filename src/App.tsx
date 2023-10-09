import './App.css'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Login from './components/Login';
import Favorite from './components/Favorite';
import { useState } from 'react';
import { HomeProducts } from "./components/Products";
import { ProductHome } from "./components/Products";


function App() {


  const [homeProducts] = useState<ProductHome[]>(HomeProducts);

  const [isClicked, setIsClicked] = useState<{ [key: number]: boolean }>({});

  const [isLikeCounter, setIsLikeCounter] = useState<number>(0);

  const handleIsClicked = (id: number) => {
    setIsClicked((prevIsClicked) => ({
      ...prevIsClicked,
      [id]: !prevIsClicked[id]
    }));

    if (isClicked[id]) {
      setIsLikeCounter((prevLikeCounter) => prevLikeCounter - 1)
    } else {
      setIsLikeCounter((prevLikeCounter) => prevLikeCounter + 1)
    }
  }

  return (
    <div>
      <Routes>
        <Route path='' element={<Home homeProducts={homeProducts} isClicked={isClicked} isLikeCounter={isLikeCounter} handleIsClicked={handleIsClicked} />} />
        <Route path='/shop' element={<Shop isLikeCounter={isLikeCounter} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </div>
  )
}

export default App;