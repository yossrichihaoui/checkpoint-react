import React from 'react'
import    {Product}  from './Product'
function Price() {
  return (
    <div>
        <h1 style={{fontSize:"1.5rem"}}>
        {Product.price}
        </h1>
   </div>
  )
}

export default Price