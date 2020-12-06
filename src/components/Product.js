import React, { useState } from 'react'
import { Card } from '@material-ui/core';
import { useStateValue } from "./../components/stateProvider";
import '../styles/product.css'

function Product() {

    const [{ cart }, dispatch] = useStateValue();

    const [product, setProduct] = useState({
        imageUrl: 'https://m.media-amazon.com/images/I/71QkAdkuyEL._AC_SY400_.jpg',
        productTitle: 'Lorem Ispum',
        productPrice: '1,200.00 USD',
        productQty: 1,
        productSeller: 'Mc Infas'
    });

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                imageUrl: 'https://m.media-amazon.com/images/I/71QkAdkuyEL._AC_SY400_.jpg',
                productTitle: 'Lorem Ispum',
                productPrice: '1,200.00 USD'
            },
        });
        //console.log(item)
    }

    return (
        <div className="product">
            <Card className="product__card">
                <img src={product.imageUrl} className="product__image" />
                <h5 className="product__title">{product.productTitle}</h5>
                <p className="product__price">{product.productPrice}</p>
                <div className="product__btn__wrapper">
                    <button className="product__button" onClick={addToBasket}>Add to Basket</button>
                </div>

            </Card>
        </div>
    )
}

export default Product
