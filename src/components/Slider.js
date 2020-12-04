import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './../styles/slider.css'

function Slider() {

    return (
        <div className="slider">
            <Carousel showArrows={true} showThumbs={false} autoPlay={true}>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/39/Prime/2019/XCM_Manual_1204610_GW_DesktopHero_Prime_refresh_3000x1200_2x_en_1575980307._CB444789786_.jpg" className="slider__img" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/39/kindle/journeys/ODM3N2IyYzkt/ODM3N2IyYzkt-ODAyMjlhNWEt-w3000._CB404364307_.jpg" className="slider__img" />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider
