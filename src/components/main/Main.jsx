import React from 'react'
import "./main.css"
import Show from '../showProducts/Show'

const Main = ({data}) => {


  return (
    <div className='row'>
        {
            
            data.map((product, index) => (
                
                (<Show key={index} {...product}/>)
    
            ))
            
        }    
    </div>
  )
}

export default Main