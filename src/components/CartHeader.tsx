import {useContext} from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { ThemeContext } from '../App'

function CartHeader() {
  const {setCartOpen} = useContext(ThemeContext)
  return (
      <div className='cart-header'>
          <CloseOutlined
              className='cart-close-btn'
              onClick={(e)=> setCartOpen(false)}
          />
          <h4>Cart</h4>
    </div>
  )
}

export default CartHeader
