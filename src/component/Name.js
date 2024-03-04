import React from 'react'
import  {Product}  from './Product'
function Name() {
  return (
    <div>

        <h1 style={{fontSize:"1.5rem"}}>
        {Product.name}
        </h1>
    </div>
  )
}


export default Name