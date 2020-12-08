import React from 'react'
import Slider from './Slider'
import HomeRow from './HomeRow'
import './../styles/home.css'

function Home() {
    return (
        <div className="home">
            <Slider />
            <div className="home__row__wrapper">
                <HomeRow key={1} title="Clothing" />
                <HomeRow key={2} title="Electronics" />
                <HomeRow key={3} title="Household" />
                <HomeRow key={4} title="Food & Beverage" />
            </div>

        </div>
    )
}

export default Home
