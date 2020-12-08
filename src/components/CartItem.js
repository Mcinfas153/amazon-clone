import React from 'react'
import { Chip } from '@material-ui/core';
import * as CurrencyFormat from 'react-currency-format';
import FaceIcon from '@material-ui/icons/Face';
import StarIcon from '@material-ui/icons/Star';
import './../styles/cartItem.css'

function CartItem({ title, imageUrl, sellerName, price, qty, rating }) {
    return (
        <div className="cart__item">
            <div className="cartItem__image__wrapper">
                <img src={imageUrl} className="cartItem__image" />
            </div>
            <div className="cartItem__info__wrapper">
                <a className="cartItem__title" title={title}>{title}</a>
                {/* small banner */}
                <div className="cartItem__ratingWrapper">
                    {
                        Array(rating).fill().map((_, i) => (
                            <StarIcon className="productRating__icon" />
                        ))
                    }
                </div>
                <p className="cartItem__sellername">
                    <Chip
                        className="cartItem__sellernameChip"
                        icon={<FaceIcon />}
                        label={sellerName}
                    />
                </p>
                <div className="cartItem__price__wrapper">
                    <p className="cartItem__price">
                        <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2} />
                    </p>
                </div>
                <div className="cartItem__removeWrapper">
                    <button className="cartItem__removeButton">Remove from Cart</button>
                </div>
            </div>
        </div >
    )
}

export default CartItem
