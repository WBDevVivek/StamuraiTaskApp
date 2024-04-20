import React, { memo } from 'react'
import Image from './Image'
import { WeatherEntity, cityNameForecastDataObjArrType } from '../interface'


type DayForeCastProp = Pick<cityNameForecastDataObjArrType, 'dayName' | 'main' | 'weather' | 'pop'>


const DayForeCast: React.FC<DayForeCastProp> = ({ dayName, main, weather, pop }): React.JSX.Element => {


  const weatherData: WeatherEntity | undefined = weather?.at(0)

  return (

    <tbody>
      <tr className={` h-[150px] lg:h-[100px] lg:max-h-[120px] p-2 md:p-0 border-b-[0.2px]`}>
        <td className={`w-[130px]`}>
          <span>
            {dayName}

          </span>

        </td>
        <td className={`w-[150px]`}>
          <span>
            {weatherData?.description}
          </span>
        </td>
        <td className={`w-[70px] text-center align-middle`}>
          <Image imgUrl={`http://openweathermap.org/img/w/${weatherData?.icon}.png`} />
        </td>

        <td >
          <span className={`w-[180px] flex flex-col justify-evenly items-start h-full`}>
            <span> <b>highs:</b>  {main?.temp_min} <sup>o</sup><b>C</b></span>
            <span> <b>lows:</b> {main?.temp_max} <sup>o</sup><b>C</b></span>
          </span>
        </td>

        <td className={` `}>  <b>{`${(pop * 100).toFixed()}%`}</b> chance of rain </td>
      </tr>
    </tbody>
  )
}

export default memo(DayForeCast)