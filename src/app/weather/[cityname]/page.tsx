"use client"


import React, { useState, useEffect, useCallback, memo } from 'react'

import { StamuraiAllState } from '@/app/context/StamuraiContextProvider'
import Header from '@/app/component/Header'
import CurrTemp from '@/app/component/CurrTemp'
import WeatherDetails from '@/app/component/WeatherDetails'
import { sectionStyle } from '@/app/tailStyleClasses'
import DayForeCast from '@/app/component/DayForeCast'
import { cityNameForecastDataObjArrType } from '@/app/interface'
import MetaData from '@/app/component/MetaData'


export interface paramsProps {
  params: {
    cityname: string | null
  }
}


const Page: React.FC<paramsProps> = ({ params }): React.JSX.Element => {

  const contextState = StamuraiAllState()

  const cityNameForecastData = contextState?.cityNameForecastData
  const cityNameData = contextState?.cityNameData?.weather?.at(0)

  const getWeatherDataByCity = contextState?.getWeatherDataByCity

  const memoizedGetWeatherDataByCity = useCallback(() => {

    getWeatherDataByCity !== undefined && getWeatherDataByCity(params?.cityname)

  },
    [params?.cityname]
  );

  useEffect(() => {
    memoizedGetWeatherDataByCity();
  }, [])

  const weatherDescription = cityNameData?.description

  const dynamicBackColor = weatherDescription === "clear sky" ? "bg-clearSkyBackColor" : weatherDescription === ("few clouds" || "broken clouds" || "overcast clouds") ? "bg-cloudySkyBackColor" : weatherDescription === "Light Rain" || "Moderate Rain" ? "bg-rainySkyBackColor" : "bg-darkBackColor"

  return (

    cityNameData !== undefined ?

      <main className={` ${true ? "dark" : ""}  capitalize max-w-[1440px] mx-auto w-full h-[auto]  py-4 
      flex justify-start md:justify-between lg:items-center ${dynamicBackColor}
    `}>
        <MetaData title={params?.cityname} />
        
        <Header dynamicBackColor={dynamicBackColor} specificClass={"lg:self-center h-[97%] lg:mt-[-2rem]"} />

        <section className={` md:ml-[100px] w-full md:w-[90%] xl:w-[100%] h-auto lg:h-screen flex flex-col lg:flex-row`}>

          <section className={` self-end lg:self-start w-[75%]  xxsm:w-[80%] xsm:w-[85%]  sm:w-[88%] md:w-full lg:w-[35%] lg:max-w-[500px]  
    
        text-[80%] lg:text-base xl:text-lg flex flex-col md:flex-row lg:flex-col justify-between items-center
         rounded-3xl mb-4 lg:mb-0 lg:mr-4 h-[740px]  md:h-[330px] lg:h-[100vh] max-h-[650px] 
        `}>
            <CurrTemp />
            <WeatherDetails />

          </section>
          <section className={` self-end lg:self-start w-[75%]  xxsm:w-[80%] xsm:w-[84%]  sm:w-[87%] md:w-[98%] lg:w-[62%]  ${sectionStyle} bg-darkContaintColor p-4  lg:max-h-[650px] `}>

            <h1 className={`w-auto font-bold text-xl  xxsm:text-2xl flex self-center`}>5 days forecast</h1>

            <div className={`overflow-x-auto `}  >
              <table className='table-fixed w-[800px] md:w-full lg:w-[720px] xl:w-full'>

                {/* --------------------------------------------------------------------- */}

                {
                  cityNameForecastData !== undefined && cityNameForecastData?.length > 0 ?
                    cityNameForecastData?.map((val: cityNameForecastDataObjArrType, i: number) => {

                      const dt_txt = val.dt_txt?.split(" ")
                      const dt_txtTime = dt_txt[1]
                      const todaysDate: Date = new Date();
                      const todaysDateDayName: string = todaysDate.toLocaleDateString("en-US", { weekday: "long" });

                      const date: Date = new Date(dt_txt[0]);
                      const dayName: string = date.toLocaleDateString("en-US", { weekday: "long" });

                      const firstIndexTime = cityNameForecastData[0].dt_txt.split(" ")[1]

                      const Today = todaysDateDayName === dayName ? "Today" : dayName

                      if (dt_txtTime === firstIndexTime) {
                        return <DayForeCast
                          key={i}
                          dayName={Today}
                          main={val?.main}
                          weather={val?.weather}
                          pop={val?.pop}
                        />

                      }
                    })
                    : <tbody>

                      <tr className={` h-[100px] p-2 md:p-0 border-b-[0.2px]`}>

                        <td className={`w-full`}>
                          <h1>loading...</h1>

                        </td>

                      </tr>
                    </tbody>
                }

                {/* --------------------------------------------------------------------- */}

              </table>
            </div>
          </section>
        </section>
      </main>
      : <h1>loading...</h1>
  )
}



export default memo(Page)








