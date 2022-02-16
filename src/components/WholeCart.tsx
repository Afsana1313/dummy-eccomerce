import {useContext} from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import { ThemeContext } from '../App'
import SingleCartItem from './SingleCartItem'
import {GetCartProp} from '../type/type'
function WholeCart() {
    const {isCartOpen, cart , setCartOpen} = useContext(ThemeContext)
    const style = {
        transform: isCartOpen ? "translateX(0)" : "translateX(100%)",
        transition: 'all 0.7s ease-in'
  }
  const cartStyle = {
    display:  isCartOpen ? "block" : "none"
  }
  return (
    <>
      <div className='cart-container' style={style}>
        <CartHeader />
        <div className='cart-wrapper'>
          <div className='mini-cart-product-container'>
            {cart?.map((i: GetCartProp) => (
              <SingleCartItem
                key={i.id}
                item={i}
              />
            ))}
          </div>
           <CartFooter />
        </div>
        
       
      </div>
      <div
        className='cart-bg'
        style={cartStyle}
        onClick={(e)=> isCartOpen ? setCartOpen(false): null}
      >
      </div>
    </>
  )
}

export default WholeCart
