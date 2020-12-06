import React from 'react'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import './../styles/cartItem.css'
import { PinDropSharp } from '@material-ui/icons';

function CartItem({ title, imageUrl, sellerName, price, qty }) {
    return (
        <div className="cart__item">
            <div className="cartItem__image__wrapper">
                <img src={imageUrl} className="cartItem__image" />
            </div>
            <div className="cartItem__info__wrapper">
                <a className="cartItem__title">{title}</a>
                <p className="cartItem__seller">{sellerName}</p>
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
                <div className="cartItem__price__wrapper">
                    <p className="cartItem__price">{price}</p>
                    <IconButton className="cartItem__remove__btn">
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
        </div >
    )
}

export default CartItem
