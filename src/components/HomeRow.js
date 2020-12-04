import React from 'react'
import Product from './Product'
import './../styles/homeRow.css'

function HomeRow({ title }) {
    return (
        <div className="home__row">
            <h1 className="row__title">{title}</h1>
            <div className="row__slider">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default HomeRow
