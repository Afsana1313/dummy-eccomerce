import {ShoppingCartOutlined} from '@ant-design/icons'
import useAppContext from '../customehook/useAppContext'
function CartDisplay() {
  const {totalValue,
    totalItem,
    setCartOpen
  } = useAppContext()
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