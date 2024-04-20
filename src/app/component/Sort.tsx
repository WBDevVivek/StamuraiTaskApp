"use client"

import React from 'react'
import { StamuraiAllState } from '../context/StamuraiContextProvider';
import { sortDownIcon, sortIcon, sortUpIcon } from '../data';


interface sortCompPropType {
    id: string;
    sortFunVal: {
        reg: string,
        rev: string,
    };
}


const Sort: React.FC<sortCompPropType> = ({ id, sortFunVal }): React.JSX.Element  => {

    const contextState = StamuraiAllState()

    const setSortState = contextState?.setSortState;
    const sortState = contextState?.sortState;
    const selected = contextState?.selected;
    const setSelected = contextState?.setSelected;
    const sortFunc = contextState?.sortFunc;

    return (
        <>
            {
                !sortState?.upSort && !sortState?.downSort ?

                    <span
                        className={`cursor-pointer text-base `}
                        onClick={() => {
                            setSortState &&   setSortState({
                                ...sortState,
                                upSort: true
                            });
                            setSelected &&    setSelected(id);
                            sortFunc &&   sortFunc(sortFunVal.reg);
                        }}>{
                            sortIcon
                        }</span> :


                    sortState.upSort && !sortState.downSort ? <span

                        className={`cursor-pointer text-base  `}
                        onClick={() => {
                            setSortState &&  setSortState({
                                ...sortState,
                                downSort: true,
                                upSort: false
                            });
                            setSelected && setSelected(id);
                            sortFunc && sortFunc(sortFunVal.rev)

                        }}>{id === selected ? sortDownIcon : sortIcon}</span> :

                        <span

                            className={`cursor-pointer   text-base  `}
                            onClick={() => {
                                setSortState && setSortState({
                                    ...sortState,
                                    upSort: false,
                                    downSort: false
                                });
                                setSelected && setSelected(null);
                                sortFunc && sortFunc("reset");

                            }}>{id === selected ? sortUpIcon : sortIcon}</span>
            }

        </>
    )
}

export default Sort