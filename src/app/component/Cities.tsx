"use client"

import React, { memo } from 'react'
import Search from './Search'
import TableBodyHeaderRow from './TableBodyHeaderRow'
import { StamuraiAllState } from '../context/StamuraiContextProvider'
import TableBodyContaintRow from './TableBodyContaintRow'


const Cities: React.FC = ({ }): React.JSX.Element => {


    const contextState = StamuraiAllState()
    const cityData = contextState?.cityData
    const handleSearch = contextState?.handleSearch

    return (

        cityData !== undefined && cityData?.length > 0 && handleSearch !== undefined ?

            <section className={`ml-[100px] w-[70%] xsm:w-[78%]  md:w-[85%] lg:w-[90%]  xl:w-[80%] max-w-[1000px]  `}>
                <Search />
             
                <div className={`overflow-x-auto  `}  >

                   <table className={` table-fixed w-[900px] lg:w-full lg:text-base xl:text-lg`}>
                        <TableBodyHeaderRow />
                        {
                            handleSearch()
                                .map((val, i) => <TableBodyContaintRow key={i} cityData={val} />)
                        }
                    </table>
                </div>
            </section>
            :
            <section className={` w-[70%] xsm:w-[80%]  md:w-[85%] lg:w-[90%]  xl:w-[80%] max-w-[1000px]  h-[500px] flex justify-center items-center`}>
                <h1>loading...</h1>
            </section>
    )
}

export default memo(Cities)