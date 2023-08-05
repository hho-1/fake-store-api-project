
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([])
  
  /* let products = [] */
  
  useEffect(() => {
    getData()
    
  }, [])


  const getData = async () => {
    await axios.get("https://fakestoreapi.com/products")
    .then((veri) => {
      /* products = veri */
      setProducts(veri.data)
    })
    .catch((error) => {
      console.log(error);
    });

  }
  
  return (
    <div className="App">
      <Header/>
      <Main data={products}/>
    </div>
  );
}

export default App;
