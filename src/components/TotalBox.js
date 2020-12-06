import React from 'react'
import './../styles/totalBox.css'

function TotalBox() {
    return (
        <div className="totalbox">
            <p className="totalbox__description">Your first order qualifies for FREE Delivery. Select this option at checkout.</p>
            <p className="totalbox__totalItem">Total Items : <strong>2</strong></p>
            <p className="totalbox__subtotal">Sub Total : <strong>1,200.00 AED</strong></p>
            <button className="totalbox__checkout__btn">Procees Checkout</button>
        </div>
    )
}

export default TotalBox
