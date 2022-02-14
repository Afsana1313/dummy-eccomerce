import React from 'react'
type GetProp = {
    name: string,
    id: number,
    brand: string,
    price: string,
    image_link: string,
    product_link: string,
    rating: number | null,
    product_type: string
    product_api_link: string,
    api_featured_image: string,
    product_colours: {
        hex_value: string,
    }[],

}
function SingleProduct( item :GetProp) {
  return (
      <div className='single-product'>
          <img
            className='single-product-img'  
            src={item.api_featured_image}
            alt={item.name}
          />
          <span>{ item.name}</span>
          <span>{ item.price}</span>
          <span>{ item.rating}</span>
          <span></span>
    </div>
  )
}

export default SingleProduct