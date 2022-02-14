import React,{useContext} from 'react'
import SingleProduct from './SingleProduct'
import { ThemeContext } from '../App'
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
function ProductContainer() {
    const {data} = useContext(ThemeContext)
  return (
      <div className='product-container'>
          <div className='product-wrapper'>
              {data?.map((i: GetProp) =>
                 (
                  <SingleProduct
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    brand={i.brand}
                    price={i.price}
                    image_link = {i.image_link}
                    product_link = {i.product_link}
                    rating={i.rating}
                    product_type= {i.product_type}
                    product_api_link={i.product_api_link}
                    api_featured_image={i.api_featured_image}
                    product_colours={i.product_colours}

                    />
                ))}
          </div>
    </div>
  )
}

export default ProductContainer