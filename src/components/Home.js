import React from 'react'
import Slider from './Slider'
import HomeRow from './HomeRow'
import './../styles/home.css'

function Home() {
    return (
        <div className="home">
            <Slider />
            <div className="home__row__wrapper">
                <HomeRow title="Clothing" />
                <HomeRow title="Electronics" />
                <HomeRow title="Household" />
                <HomeRow title="Food & Beverage" />
            </div>

        </div>
    )
}

export default Home
