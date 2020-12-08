import React from 'react'
import Product from './Product'
import productList from './../config/product.json'
import './../styles/homeRow.css'

function HomeRow({ title }) {
    return (
        <div className="home__row">
            <h1 className="row__title">{title}</h1>
            <div className="row__slider">
                {
                    productList.map(product => (
                        <Product
                            key={product.id}
                            productId={product.id}
                            imageUrl={product.imageUrl}
                            productTitle={product.productTitle}
                            productPrice={product.productPrice}
                            productSeller={product.productSeller}
                            productRating={product.rating}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default HomeRow
