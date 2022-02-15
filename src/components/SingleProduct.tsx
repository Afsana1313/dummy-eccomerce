import { GetProp } from '../type/type'
import { useState, useContext } from 'react'
import {ThemeContext} from '../App'
function SingleProduct(item: GetProp) {
  const {
    setCart,
    cart,
    setTotalItem,
    totalItem,
    totalValue,
    setTotalValue,
    setCartOpen
  } = useContext(ThemeContext);
  const [isInCart, setIsInCart] = useState(false)
  const btnText = isInCart ? 'VIEW CART' : 'ADD TO CART'
  const handleAddToCart = (item: GetProp) => {
    const cartItem = {
      ...item,
      quantity: 1,
      added: true
    }
    totalItem === 0 ? setCart([cartItem]) :setCart([...cart, cartItem]);
    setTotalItem(totalItem + 1)
    var value = totalValue as number + parseFloat(item.price as string) as number
    value = parseFloat(value.toPrecision(4) as string) as number;
    setTotalValue(value)
    setIsInCart(true)
  }
  
  return (
    <div className='single-product' key={item.id}>
          <img
            className='single-product-img'  
            src={item.api_featured_image}
            alt={item.name}
          />
      <div className='single-product-text'>
          <span>{ item.name}</span>
          <span><span>{ item.price_sign}</span>{ item.price}</span>
        <span>{item.rating}</span>
      </div>
      <button
        className='cart-btn'
        onClick={(e)=>  isInCart ? setCartOpen(true) : handleAddToCart(item)}
      >{btnText}</button>
         
    </div>
  )
}

export default SingleProduct