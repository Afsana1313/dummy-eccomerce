import {useContext} from 'react'
import {ShoppingCartOutlined} from '@ant-design/icons'
import { ThemeContext } from '../App'
function CartDisplay() {
  const {totalValue,
    totalItem,
    setCartOpen
  } = useContext(ThemeContext)
  return (
    <div
      className='cart-display'
      onClick={(e)=> setCartOpen(true)}  
      >
          <div className='cart-icon'>
            <ShoppingCartOutlined />
      </div>
      <div className='cart-item-number'>
        {totalItem}{totalItem === 1 ? ' item' : ' items'}
      </div>
          <div className='cart-text'>
                  {totalValue}  
          </div>
    </div>
  )
}

export default CartDisplay