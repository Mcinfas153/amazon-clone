import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './../styles/totalBox.css'
import { useStateValue } from './stateProvider';

function TotalBox({ grandTotal, cartItemQty }) {
    return (
        <div className="totalbox">
            <p className="totalbox__description">Your first order qualifies for FREE Delivery. Select this option at checkout.</p>
            <p className="totalbox__totalItem">Total Items : <strong>{cartItemQty}</strong></p>
            <p className="totalbox__subtotal">Sub Total :
            <strong>
                    <CurrencyFormat
                        value={grandTotal}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={value => <div>{value}</div>}
                    />
                </strong>
            </p>
            <button className="totalbox__checkout__btn">Procees Checkout</button>
        </div>
    )
}

export default TotalBox
