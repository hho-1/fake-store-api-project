
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
  
  /* const [filteredProducts, setFilteredProducts] = useState([]) */

  let filteredProducts = products

  async function handleButtonClick(buttonName) {

    console.log(filteredProducts);

    if(buttonName !== "ALL"){
      let filterdProducts = products.filter((product) => {
        return product.category.toUpperCase() === buttonName;
      })
      console.log(filteredProducts);
      console.log(filterdProducts);
      filteredProducts = filterdProducts
      setProducts(filteredProducts)
      console.log(products);
    }
    
  }
  
  
  return (
    <div className="App container-fluid">
      <Header onClick={handleButtonClick}/>
      <Main data={products}/>
    </div>
  );
}

export default App;
