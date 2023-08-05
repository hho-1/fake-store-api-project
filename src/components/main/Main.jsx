import React, { useState } from 'react'
import "./main.css"
import Show from '../showProducts/Show'

const Main = ({data}) => {

  const [buttonName, setButtonName] = useState('ALL')
  const [isFiltered, setIsFiltered] = useState(false)

  const handleButtonName = (e) => {
      setButtonName(e.target.innerText)

      setIsFiltered(true)   
  }

  return (
    <div className='container-fluid'>
      <div className='buttons'>
            <button onClick={()=> setIsFiltered(false)}>ALL</button>
            <button onClick={handleButtonName}>ELECTRONICS</button>
            <button onClick={handleButtonName}>JEWELERY</button>
            <button onClick={handleButtonName}>MEN'S CLOTHING</button>
            <button onClick={handleButtonName}>WOMEN'S CLOTHING</button>   
      </div>
      <div className='row'>
        {
            isFiltered ? (
              data.filter((product) => {
                return product.category.toUpperCase() === buttonName;
              }).map((filteredProduct, index) => {return <Show key={index} {...filteredProduct}/>})
            ) : (
              data.map((product, index) => {
                
              return <Show key={index} {...product}/>
  
              })
          )
            
            
        }    
      </div>
    </div>
    
  )
}

export default Main