import React from 'react'
import CartItem from './CartItem'
import TotalBox from './TotalBox'
import './../styles/checkout.css'

function CheckOut() {
    return (
        <div className="checkout">
            <div className="checkout__left__wrapper">
                <CartItem />
            </div>
            <div className="checkout__right__wrapper">
                {/* <TotalBox /> */}
            </div>
        </div>
    )
}

export default CheckOut
