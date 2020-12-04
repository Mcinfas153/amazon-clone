import React from 'react'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './../styles/cartItem.css'

function CartItem() {
    return (
        <div className="cart__item">
            <div className="cartItem__image__wrapper">
                <img src="https://m.media-amazon.com/images/I/71QkAdkuyEL._AC_SY400_.jpg" className="cartItem__image" />
            </div>
            <div className="cartItem__info__wrapper">
                <a className="cartItem__title">Surrounded by Idiots: The Four Types of Human Behaviour (or, How to Understand Those Who Cannot Be Understood)</a>
                <p className="cartItem__seller">Thomas Erikson</p>
                {/* small banner */}
                <div className="cartItem__qtyController">
                    <IconButton className="qty__btn decrease--btn"><RemoveIcon /></IconButton>
                    <select className="cartItem__qty">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <IconButton className="qty__btn increase--btn"><AddIcon /></IconButton>
                </div>

                {/* price */}
            </div>
        </div>
    )
}

export default CartItem
