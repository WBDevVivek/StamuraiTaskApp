"use client"

import React, { memo } from 'react'
import { flexRowJustBetItemsCen, tableCellStyle } from '../tailStyleClasses'
import { StamuraiAllState } from '../context/StamuraiContextProvider'
import Link from 'next/link'
import { cityDataType } from '../interface'


interface TableBodyContaintRowPropsType {
    cityData: cityDataType
}


const TableBodyContaintRow: React.FC<TableBodyContaintRowPropsType> = ({ cityData }): React.JSX.Element => {

    const contextState = StamuraiAllState()

    const setCityName = contextState?.setCityName
    const saveTempToCityTableArray = contextState?.saveTempToCityTableArray


    function openLinkInNewTab(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
        event.preventDefault();
        const url = (event.target as HTMLAnchorElement).href;
        window.open(url, '_blank');
    }

    const cityName = cityData.name.replace(/[ā]/g, "a").replace(/[ē]/g, "e").replace(/[ī]/g, "i").replace(/[ō]/g, "o").replace(/[ū]/g, "u")

    return (
        <tbody>
            <tr className={`h-[40px] p-4 `}>
                <td> <Link href={`/weather/${cityName}`} className={`${tableCellStyle} cursor-pointer `}
                    onContextMenu={openLinkInNewTab}
                    onClick={(e) => setCityName && setCityName(cityName)}
                >{cityData.id} {(cityName)} </Link></td>
                <td><span className={`${tableCellStyle} `} >{cityData.cou_name_en} </span> </td>
                <td><span className={`${tableCellStyle} `} >{cityData.country_code} </span></td>
                <td><span className={`${tableCellStyle} `} >{cityData.timezone} </span></td>
                <td><span className={`${tableCellStyle} ${flexRowJustBetItemsCen} `} >
                    <span>{cityData.coordinates.lon.toFixed(2)}</span>
                    <span>{cityData.coordinates.lat.toFixed(2)}</span>
                </span>
                </td>
                {
                    (saveTempToCityTableArray && saveTempToCityTableArray.length > 0) ?
                        <td>
                            <span className={` bg-darkContaintColor max-w-[140px] h-[30px] flex justify-start items-center whitespace-nowrap overflow-hidden text-ellipsis grow shrink p-[5px] basis-[100px]  mr-[2px] rounded  ${saveTempToCityTableArray && saveTempToCityTableArray.length <= 0 && "hidden"}`} >
                                {cityData.temp}
                                <sup>{cityData.temp && "o"}</sup><b>{cityData.temp && " C"}</b>
                            </span>
                        </td> : null
                }
            </tr>
        </tbody >
    )
}

export default memo(TableBodyContaintRow)
