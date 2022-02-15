import {useContext} from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import { ThemeContext } from '../App'
import SingleCartItem from './SingleCartItem'
import {GetCartProp} from '../type/type'
function WholeCart() {
    const {isCartOpen, cart} = useContext(ThemeContext)
    const style = {
        transform: isCartOpen ? "translateX(0)" : "translateX(100%)",
        transition: 'all 0.7s ease-in'
    }
  return (
    <div className='cart-wrapper' style={style}>
      <div className='cart-container' style={style}>
        <CartHeader />
         {cart?.map((i: GetCartProp) => (
           <SingleCartItem
             key={i.id}
             item={i}
          />
        ))} 
            <CartFooter />
    </div>
    </div>
  )
}

export default WholeCart
