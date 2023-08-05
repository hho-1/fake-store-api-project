import React, { useState } from 'react'
import "./header.css"

const Header = ({onClick}) => {

  const [buttonName, setButtonName] = useState("ALL")

  const handleButtonName = (e) => {
    setButtonName(e.target.innerText)
    onClick(buttonName);
  }

  return (
    <div className='header'>
        <h1>Products List</h1>
        <div className='buttons'>
            <button onClick={handleButtonName}>ALL</button>
            <button onClick={handleButtonName}>ELECTRONICS</button>
            <button onClick={handleButtonName}>JEWELERY</button>
            <button onClick={handleButtonName}>MEN'S CLOTHING</button>
            <button onClick={handleButtonName}>WOMEN'S CLOTHING</button>   
        </div>
    </div>
  )
}

export default Header