import React from 'react'
import './show.css'

const Show = ({title, image, price}) => {
    
  return (
    <div className='col col-md-4 col-lg-2 col-sm-6 col-xs-12'>
        <div className="card">
            <img src={image} className="card-img-top" alt={title}/>
            <div className="card-body">
                <p className="card-text">$ {price}</p>
                <p className="item-name">$ {title}</p>
            </div>
        </div>
    </div>
    
  )
}

export default Show