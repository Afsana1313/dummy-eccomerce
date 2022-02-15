import React from 'react'
import { GetCartProp } from '../type/type'
type Props = {
    key: number,
    item: GetCartProp
}
function SingleCartItem({ key, item }: Props) {
    console.log(item)
  return (
      <div>{ }</div>
  )
}

export default SingleCartItem