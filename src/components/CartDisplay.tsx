//import Odometer from 'react-odometerjs';
import { ShoppingCartOutlined } from '@ant-design/icons'
import useAppContext from '../customehook/useAppContext'

function CartDisplay() {
  const {totalValue,
    cart,
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
        {!!cart?.length && cart?.length}{cart?.length === 0 ? 'No Item' 
                                        : cart?.length === 1 ? ' item'
                                        : ' items'}
      </div>
          <div className='cart-text'>
       {/* <Odometer
                value={totalValue}
                format="(.ddd),dd"
            />   */}
        {totalValue}
          </div>
    </div>
  )
}

export default CartDisplay