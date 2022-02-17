import SingleProduct from './SingleProduct'
import { GetProp } from '../type/type'
import useAppContext from '../context/useAppContext'
function ProductContainer() {
    const {data} = useAppContext()
  return (
    <div
      className='product-container'
    >
          <div className='product-wrapper'>
              {data?.map((i: GetProp) =>
                 (
                  <SingleProduct
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    brand={i.brand}
                    price={i.price}
                    price_sign={i.price_sign}
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