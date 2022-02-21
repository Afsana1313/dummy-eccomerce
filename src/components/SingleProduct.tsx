import { GetCartProp, GetProp } from 'type/type'
import { useState, useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import useAppContext from 'context/useAppContext';

function SingleProduct(item: GetProp) {
  const {
    setCart,
    cart,
    setTotalItem,
    totalItem,
    totalValue,
    setTotalValue,
    setCartOpen
  } = useAppContext();
  useEffect(() => {
      !!cart?.find((i:GetCartProp)=> i.id === item.id) ? setIsInCart(true) : setIsInCart(false)
  }, [cart])
  const [loaderVisible, setLoaderVisible] = useState(false)
  const [isInCart, setIsInCart] = useState(false)
  const btnText = isInCart ? 'VIEW CART' : 'ADD TO CART'
  let iconStyle = {
    marginRight: '10px',
    display: loaderVisible ? 'inline-block' : 'none'
  }
  const handleAddToCart = (item: GetProp) => {
    const cartItem = {
      ...item,
      quantity: 1,
      totalValue: parseFloat(item.price),
      added: true
    }
    setLoaderVisible(true)
    setTimeout(() => {
      setLoaderVisible(false) 
    }, 2000)
    !!loaderVisible ? setTimeout(() => {
      setIsInCart(true)
      console.log(isInCart)
    }, 2000) : void
    
    totalItem === 0 ? setCart([cartItem]) : setCart([...cart, cartItem]);
    setTotalItem(totalItem + 1)
    var value = totalValue as number + parseFloat(item.price as string) as number
    value = parseFloat(value.toPrecision(4) as string) as number;
    setTotalValue(value)
    
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
      >
         <LoadingOutlined
          style={iconStyle}
          className='cart-loader-icon'
        /> 
        {btnText}</button>
         
    </div>
  )
}

export default SingleProduct