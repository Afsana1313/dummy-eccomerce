import {useContext, useState} from 'react'
import { GetCartProp } from '../type/type'
import { DeleteOutlined } from '@ant-design/icons'
import {ThemeContext} from '../App'
type Props = {
    key: number,
    item: GetCartProp
}
function SingleCartItem({ key, item }: Props) {
    const [quantity, setQuantity] = useState<number>(0)
    const { cart,
        setCart,
        totalItem,
        setTotalItem,
        totalValue,
        setTotalValue
    } = useContext(ThemeContext)
    const handleDelete = (id: number) => {
        setCart(cart?.filter((i: GetCartProp) => i.id !== id))
        setTotalItem(totalItem - 1)
        var value = totalValue as number - parseFloat(item.price as string) as number
        value = parseFloat(value.toPrecision(5) as string) as number;
        setTotalValue(value)
    }
    const handleQuantity =  (e: any, i: GetCartProp) => {
        setQuantity(parseInt(e.target.value))
        var newTotalValue: number = 0;
        const newCart =  cart.map((item: GetCartProp) => 
        {
            if (i.id === item.id) {
                item.quantity = parseInt(e.target.value);
                item.totalValue = item.quantity * parseFloat(item.price);
                //newTotalValue = newTotalValue as number - parseFloat(item.price as string) as number + item.totalValue as number;
                //console.log(newTotalValue)
            }
            return item;
        })
         newTotalValue = cart.reduce((sum : number, item: GetCartProp) => sum + item.totalValue,0)
        // console.log(newTotalValue)
         setTotalValue(newTotalValue)
        setCart(newCart)
    }
  return (
      <>
        <div className='single-cart-item'>
          <div className='cart-image'>
              <img
                  src={item.api_featured_image}
                  alt={item.name}
              />
          </div>
          <div className='cart-text'>
              {item.name}<br />
              {item.brand}<br />
              { item.price_sign}{item.price}
          </div>
          <div className='cart-control'>
              <div className='cart-item-delete'>
                  <DeleteOutlined
                    onClick={(e)=> handleDelete(item.id)}
                  />
              </div>
              <div className='cart-item-quantity'>
                  <select
                      name="cart-item-quantity"
                      id="cart-item-quantity"
                      value={quantity}
                      onChange={(e) => handleQuantity(e,item)}
                  >
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>                      
                </select>
              </div>
           </div>
          </div>
          <div className='cart-single-item-total'>
              {item.price_sign}{item.quantity*parseFloat(item.price)}
          </div>
      </>
  )
}

export default SingleCartItem