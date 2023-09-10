import { ICar } from "../../../@types/car";
import { Car } from "../../components/car";
import { CarsContainer, Title, TopCarsContainer } from "./styles";

import AudiS3Image from "../../../assets/images/audi-s3.png";
import HondaCityImage from "../../../assets/images/honda-city.png";

import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

export function TopCars(){
    const [current, setCurrent] = useState(0)

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    const testCar:ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc: `${AudiS3Image}`,
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol"
    }

    const testCar2:ICar = {
        name: "Honda City 5 Seater Car",
        mileage: "20k",
        thumbnailSrc: `${HondaCityImage}`,
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol"
    }

    const cars = [
        <Car {...testCar}/>,
        <Car {...testCar}/>,
        <Car {...testCar2}/>,
        <Car {...testCar}/>,
        <Car {...testCar2}/>
    ]

    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3)

    return(
        <TopCarsContainer>
            <Title>Explore Our Top Deals</Title>
            <CarsContainer>
                <Carousel 
                    value={current} 
                    onChange={setCurrent} 
                    slides={cars}
                    plugins={[
                        "clickToChange",
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3
                            }
                        }
                    ]}
                    breakpoints={{
                        640: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                }
                            ]
                        },
                        900: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2
                                    }
                                }
                            ]
                        }
                    }} 
                />
                <Dots value={current} onChange={setCurrent} number={numberOfDots} />
            </CarsContainer>
        </TopCarsContainer>
    )
}