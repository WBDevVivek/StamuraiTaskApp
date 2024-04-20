"use client"

import React, { memo } from 'react'
import { flexColJustCenItemsCenter } from '../tailStyleClasses'
import { StamuraiAllState } from '../context/StamuraiContextProvider'
import {  weatherDetailsArrayType } from '../interface'

const divClass = `text-md py-2 w-1/2 ${flexColJustCenItemsCenter}`

const WeatherDetails: React.FC = (): React.JSX.Element  => {

    const contextState = StamuraiAllState();
    const cityNameDataWeather = contextState?.cityNameData?.weather?.at(0)
    const cityNameData = contextState?.cityNameData

    const weatherDetailsArray: weatherDetailsArrayType[] = [
        {
            id: "01",
            weatherName: "weather description",
            weatherValue: cityNameDataWeather?.main
        }, {
            id: "02",
            weatherName: "humidity",
            weatherValue: cityNameData?.main?.humidity
        }, {
            id: "03",
            weatherName: "wind speed",
            weatherValue: cityNameData?.wind?.speed
        }, {
            id: "04",
            weatherName: "atmospheric pressure",
            weatherValue: cityNameData?.main?.pressure
        }
    ]

    return (
        <div className={`bg-darkContaintColor flex flex-wrap justify-around items-center w-[98%] md:w-[50%] lg:w-full  h-full  lg:h-1/2 rounded-3xl  md:mr-4 lg:mr-0 `} >

            <h1 className={`w-full text-center text-lg  xxsm:text-xl xl:text-2xl font-bold`} >air condition</h1>
            {
                weatherDetailsArray?.map((val) => {
                    return <div key={val.id} className={`${divClass}`} >
                        <h3 className={`text-center`} >{val.weatherName}</h3>
                        <span className={`font-bold text-lg  xxsm:text-xl xl:text-2xl`} >{val.weatherValue}</span>
                    </div>
                })
            }
        </div>
    )
}

export default  memo(WeatherDetails)