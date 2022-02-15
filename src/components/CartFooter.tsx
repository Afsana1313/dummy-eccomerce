import {useContext} from 'react'
import {ThemeContext} from '../App'
function CartFooter() {
    const {totalValue} = useContext(ThemeContext)
  return (
      <div className='cart-footer'>
          <div className='cart-footer-text'>
              Cart Total: <br />
              <span>{ totalValue}</span>
          </div>
          <div className='cart-footer-btn'>
              <button>Proceed</button>
          </div>
    </div>
  )
}

export default CartFooter
