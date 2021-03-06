import React, { useState } from 'react'
import CartItem from './CartItem'
import TotalBox from './TotalBox'
import './../styles/checkout.css'
import { useStateValue } from './stateProvider'
import { getBasketTotal } from './reducer'
import { get } from 'node-emoji'

function CheckOut() {

    const [{ cart, grandTotal }] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left__wrapper">
                {
                    //check cart empty or not
                    (cart.length > 0) ?
                        cart.map(item => (
                            <CartItem
                                id={item.id}
                                title={item.productTitle}
                                price={item.productPrice}
                                qty={item.productQty}
                                sellerName={item.productSeller}
                                imageUrl={item.imageUrl}
                                rating={item.productRating}
                            />
                        ))
                        :
                        //if cart empty
                        <div className="chekout__empty__wrapper">
                            <h3>Cart Item is Empty</h3>
                        </div>
                }
            </div>
            <div className="checkout__right__wrapper">
                <TotalBox grandTotal={getBasketTotal(cart)} cartItemQty={cart.length} />
            </div>
        </div>
    )
}

export default CheckOut
