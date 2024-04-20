
"use client"

import React, { memo } from 'react'
import { flexColJustBetItemsCen, tableCellStyle } from '../tailStyleClasses'

import { StamuraiAllState } from '../context/StamuraiContextProvider'
import Sort from './Sort'

const TableBodyHeaderRow: React.FC = ({ }): React.JSX.Element => {

    const contextState = StamuraiAllState()

    const setSearchValue = contextState?.setSearchValue
    const filterSelected = contextState?.filterSelected
    const setFilterSelected = contextState?.setFilterSelected

    const saveTempToCityTableArray = contextState?.saveTempToCityTableArray

    const headerMenuData = [

        {
            id: "01",
            headValue: "city name ",
            sortFun: {
                reg: "byCityNameAlphaBet",
                rev: "byCityNameAlphaBetRev"
            },
            optionsArray: contextState?.allUnicCityNames
        },
        {
            id: "02",
            headValue: "country name",
            sortFun: {
                reg: "byCountryNameAlphaBet",
                rev: "byCountryNameAlphaBetRev"
            },
            optionsArray: contextState?.allUnicCountryName
        },
        {
            id: "03",
            headValue: "country code",
            sortFun: {
                reg: "byCountryCodeAlphaBet",
                rev: "byCountryCodeAlphaBetRev"
            },
            optionsArray: contextState?.allUnicCountryCode
        },
        {
            id: "04",
            headValue: "timezone",
            sortFun: {
                reg: "byTimezoneAlphaBet",
                rev: "byTimezoneAlphaBetRev"
            },
            optionsArray: contextState?.allUnicTimezone
        },
        {
            id: "05",
            headValue: "coordinates",
            sortFun: {
                reg: "byCoordinates",
                rev: "byCoordinatesRev"
            },
            optionsArray: contextState?.allUnicCoordinates
        },
        {
            id: "06",
            headValue: "temp",
            sortFun: {
                reg: "byTemp",
                rev: "byTempRev"
            },
            optionsArray: contextState?.allUnicTemp
        }
    ]

    return (

        <thead>
            <tr>
                {
                    headerMenuData?.map((val, i) => {

                        if (i !== 5) {
                            return <th key={i} className={`   relative h-[50px]  `}>
                                <span className={`${tableCellStyle} `} >
                                    <span className={`cursor-pointer `}

                                        onClick={() => setFilterSelected && setFilterSelected(i === filterSelected ? null : i)}>
                                        {val.headValue}
                                        <div className={`${flexColJustBetItemsCen} 
                                ${filterSelected === i ? "flex" : "hidden"}
                                text-[60%] absolute top-[30px] left-[30px] z-10 left-0 
                                border-2 bg-darkBackColor min-w-[150px] w-[100px] min-h-[50px] max-h-[200px] overflow-y-auto
                    
                    `}>
                                            {
                                                val?.optionsArray && val?.optionsArray.map((val2, i) => {

                                                    return (
                                                        <span
                                                            key={i}
                                                            className={`cursor-pointer`}
                                                            onClick={() => setSearchValue && setSearchValue(typeof val2 === "string" ? val2.toLowerCase() : val2)}
                                                        >{val2}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </span>
                                    <span className={``}><Sort id={val.id} sortFunVal={val.sortFun} /></span>
                                </span>
                            </th>
                            
                        } else {

                            return (saveTempToCityTableArray && saveTempToCityTableArray.length > 0) ? <th key={i} className={`   relative h-[50px]  `}>
                            <span className={`${tableCellStyle} `} >
                                <span className={`cursor-pointer `}

                                    onClick={() => setFilterSelected && setFilterSelected(i === filterSelected ? null : i)}>
                                    {val.headValue}
                                    <div className={`${flexColJustBetItemsCen} 
                            ${filterSelected === i ? "flex" : "hidden"}
                            text-[60%] absolute top-[30px] left-[30px] z-10 left-0 
                            border-2 bg-darkBackColor min-w-[100px] w-[100px] min-h-[50px] max-h-[200px] overflow-y-auto
                
                `}>
                                        {
                                            val?.optionsArray && val?.optionsArray.map((val2, i) => {

                                                return (
                                                    <span
                                                        key={i}
                                                        className={`cursor-pointer`}
                                                        onClick={() => setSearchValue && setSearchValue(typeof val2 === "string" ? val2.toLowerCase() : val2)}
                                                    >{val2}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </span>
                                <span className={``}><Sort id={val.id} sortFunVal={val.sortFun} /></span>
                            </span>
                        </th>
                            : null
                        }
                    })
                }
            </tr>
        </thead>
    )
}

export default memo(TableBodyHeaderRow)



