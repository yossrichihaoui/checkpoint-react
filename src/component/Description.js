import React from 'react'
import   {Product}  from './Product'
function Description() {
  return (
    <div>
        <h2 style={{fontSize:"1.5rem"}}>{Product.description}</h2>
    </div>
  )
}

export default Description