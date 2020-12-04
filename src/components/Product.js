import React, { useState } from 'react'
import { Card } from '@material-ui/core';
import '../styles/product.css'

function Product() {

    const [product, setProduct] = useState({
        imageUrl: 'https://m.media-amazon.com/images/I/71QkAdkuyEL._AC_SY400_.jpg',
        productTitle: 'Lorem Ispum',
        productPrice: '1,200.00 USD'
    });

    return (
        <div className="product">
            <Card className="product__card">
                <img src={product.imageUrl} className="product__image" />
                <h5 className="product__title">{product.productTitle}</h5>
                <p className="product__price">{product.productPrice}</p>
                <div className="product__btn__wrapper">
                    <button className="product__button">Add to Basket</button>
                </div>

            </Card>
        </div>
    )
}

export default Product
