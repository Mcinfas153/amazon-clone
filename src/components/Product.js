import React, { useEffect, useState } from 'react'
import { Card, Chip } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "./../components/stateProvider";
import truncate from 'truncate'
import emoji from 'node-emoji'
import * as CurrencyFormat from 'react-currency-format';
import '../styles/product.css'

function Product({ productId, imageUrl, productTitle, productPrice, productSeller, productRating }) {
    const [{ cart, isButtonDisabled }, dispatch] = useStateValue();
    const [ratingHtml, setRatingHtml] = useState('')

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: productId,
                imageUrl: imageUrl,
                productTitle: productTitle,
                productPrice: productPrice,
                productRating: productRating,
                productSeller: productSeller
            },
        });
    }

    return (
        <div className="product">
            <Card className="product__card">
                <div className="productImage__wrapper">
                    <img src={imageUrl} className="product__image" />
                </div>
                <h5 className="product__title" title={productTitle}>{truncate(productTitle, 50)}</h5>
                <div className="prductRating__wrapper">
                    {
                        Array(productRating).fill().map((_, i) => (
                            <StarIcon className="productRating__icon" />
                        ))
                    }
                </div>
                <p className="product__sellername">
                    <Chip
                        className="product__sellernameChip"
                        icon={<FaceIcon />}
                        label={productSeller}
                    />
                </p>
                <p className="product__price">{
                    <CurrencyFormat value={productPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2} />
                }</p>
                <div className="product__btn__wrapper">
                    <button className={isButtonDisabled ? "product__button button--disabled" : "product__button"} onClick={addToBasket}>Add to Basket</button>
                </div>
            </Card>
        </div>
    )
}

export default Product
