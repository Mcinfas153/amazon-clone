import React, { useState } from 'react'
import CartItem from './CartItem'
import TotalBox from './TotalBox'
import './../styles/checkout.css'
import { useStateValue } from './stateProvider'

function CheckOut() {

    const [{ cart }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left__wrapper">
                {
                    //check cart empty or not
                    (cart.length > 0) ?
                        cart.map(item => (
                            <CartItem
                                title={item.productTitle}
                                price={item.productPrice}
                                qty={item.productQty}
                                sellerName={item.productSeller}
                                imageUrl={item.imageUrl}
                            />
                        ))
                        :
                        //if cart empty
                        <div className="chekout__empty__wrapper">
                            <h1>Cart Item is Empty</h1>
                        </div>

                }
            </div>
            <div className="checkout__right__wrapper">
                <TotalBox />
            </div>
        </div>
    )
}

export default CheckOut
