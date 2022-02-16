import React from 'react'
import { GetCartProp } from '../type/type'
type Props = {
    key: number,
    item: GetCartProp
}
function SingleCartItem({ key, item }: Props) {
    console.log(item)
  return (
      <div className='single-cart-item'>
          <div className='cart-image'>
              <img
                  src={item.api_featured_image}
                  alt={item.name}
              />
          </div>
          <div className='cart-text'>
              {item.name}<br />
              {item.brand}<br />
              {item.price}
          </div>
          <div className='cart-control'></div>
      </div>
  )
}

export default SingleCartItem