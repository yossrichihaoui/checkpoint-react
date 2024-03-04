import React from 'react'
import   {Product}  from './Product'
function Image() {
  return (
    <div>
        <img src={Product.image} style={{width:"200px",height:"150px"}}/>
    </div>
  )
}

export default Image