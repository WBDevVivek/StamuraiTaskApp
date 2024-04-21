"use client"

import React, { memo, useEffect } from 'react'
import { flexColJustEveItemsCen } from '../tailStyleClasses'
import { StamuraiAllState } from '../context/StamuraiContextProvider'
import Image from './Image'


//--------------------------------------

const CurrTemp: React.FC = ({}): React.JSX.Element => {


  const contextState = StamuraiAllState();

  const cityNameDataWeather = contextState?.cityNameData?.weather?.at(0)
  const cityNameData = contextState?.cityNameData
  

  const setSaveTempToCityTable = contextState?.setSaveTempToCityTable



  useEffect(() => {

    setSaveTempToCityTable && setSaveTempToCityTable({
      cityName: cityNameData?.name,
      cityTemp: cityNameData?.main?.temp
    })

  }, [cityNameData])




  const cityName = cityNameData?.name.replace(/ā/g, "a").replace(/ē/g, "e").replace(/ī/g, "i").replace(/ō/g, "o").replace(/ū/g, "u")







  
  return (
    cityNameData !== undefined ? <section className={`flex w-[98%] md:w-[47%] lg:w-full   h-full  lg:h-1/2 md:mr-0 mb-4 md:mb-0  lg:mb-4 rounded-3xl justify-evenly bg-darkContaintColor`}>

      <div className={` ${flexColJustEveItemsCen}  h-full `}>
        <h3 className={`text-xl xxsm:text-2xl  font-bold self-start`} >{cityName}</h3>
        <p className={``} >{cityNameDataWeather?.description}</p>
        <h1 className={`text-2xl  xxsm:text-4xl font-bold`} >{cityNameData?.main?.temp}<sup>o</sup><b>C</b></h1>
      </div>
      <div className='flex w-[50px] h-[50px] self-center scale-150 xxsm:scale-[3]'>
        <Image imgUrl={`http://openweathermap.org/img/w/${cityNameDataWeather?.icon}.png`} className={`text-sm`} />
      </div>
    </section> : <h1>loading...</h1>

  )
}

export default memo(CurrTemp)
