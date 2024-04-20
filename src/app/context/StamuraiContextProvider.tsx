"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getCityListData, getCityNameData, getCityForeCastData } from "./fetchData";
import { SingleCityWeatherDataType, StamuraiContextProviderPropsType, StamuraiStatesType, cityDataType, cityNameForecastDataObjArrType, saveTempToCityTableType, sortStateInterface } from "../interface";


// -------------------------------------

export const StamuraiTaskAppStates = createContext<StamuraiStatesType | null>(null);


export const StamuraiContextProvider: React.FC<StamuraiContextProviderPropsType> = ({ children }) => {


const  cityDataLimit = (typeof window !== 'undefined') && (window?.innerHeight > 500) ? 50 : 10;

    const [cityData, setCityData] = useState<cityDataType[]>([])
    const [loadMore, setLoadMore] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>("");
    const [sortState, setSortState] = useState<sortStateInterface>({
        sort: true,
        upSort: false,
        downSort: false,
    });

    const [selected, setSelected] = useState<string | null>(null);
    const [filterSelected, setFilterSelected] = useState<number | null>(null);

    const [cityName, setCityName] = useState<string>("pune")
    const [cityNameData, setCityNameData] = useState<SingleCityWeatherDataType | undefined>()
    const [cityNameForecastData, setCityNameForecastData] = useState<cityNameForecastDataObjArrType[] | undefined>([])


    const [saveTempToCityTable, setSaveTempToCityTable] = useState<saveTempToCityTableType>({
        cityName: "",
        cityTemp: 0
    })
    const [saveTempToCityTableArray, setSaveTempToCityTableArray] = useState<saveTempToCityTableType[]>([])


    // ===================================

    // ===================================


    const listenScrollEvent = useCallback(()=>{

        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setLoadMore((pre) => pre + 20)
        } 
        else {
            if (window.scrollY === 0) {
                // setLoadMore(1);
            }
        }
    },[])



    // ===================================


    const fetchCityListDataFromAPI = useCallback(()=>{

 

        getCityListData(loadMore,cityDataLimit).then((data) => setCityData([...cityData,...data].map((val: cityDataType, i: number) => {
            val.id = i + 1
            return val
        }))).catch((error: Error) => {
            throw error
        });
    },[loadMore,cityDataLimit])




    useEffect(() => {

        fetchCityListDataFromAPI()

        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };

    }, [loadMore,cityDataLimit])




    const tempToCityData = useCallback(() => {
        // console.log("called...")
        return cityData.map((val: cityDataType, i: number) => {
            val.temp = (saveTempToCityTableArray.length > 0) ? saveTempToCityTableArray?.filter((val2) => val2?.cityName === val?.name)[0]?.cityTemp : 0
        })

    }, [saveTempToCityTableArray.length])


    tempToCityData();


    // ===================================


    function getWeatherDataByCity(cityName: string): void {
        getCityNameData(cityName).then((data) => {
            setCityNameData(data)
        }
        ).catch(error => console.log(`error ${error}`))
        getCityForeCastData(cityName).then((data) => setCityNameForecastData(data?.list));
    }

    // ===================================


    function handleSearch(): cityDataType[] {
        return [...cityData]?.filter((val: cityDataType, i) => {
            return (
                filterFunForDiffValue(val?.name) ||
                filterFunForDiffValue(val?.cou_name_en) ||
                filterFunForDiffValue(val?.country_code) ||
                filterFunForDiffValue(val?.timezone) ||
                filterFunForDiffValue(val?.coordinates) || 
                filterFunForDiffValue(String(val?.temp))
            )
        })
    }

    // ===================================


    // filter Function

    function filterFunForDiffValue(byfilterValue: string | object ) {
        if (byfilterValue instanceof Object) {
            const valueArray = Object.values(byfilterValue)
            return valueArray
                .join()
                .includes(searchValue);
        } else {
            return byfilterValue
                .split(" ")
                .map((num, i) => {
                    return num.toLowerCase();
                })
                .join()
                .toLowerCase()
                .includes(searchValue);
        }
    }


    // ===================================


    function sortFunc(sortByWhat: string) {
        switch (sortByWhat) {
            case "byCityNameAlphaBet":
                return cityData.sort((a: cityDataType, b: cityDataType) => b.name.localeCompare(a.name));
                break;
            case "byCityNameAlphaBetRev":
                return cityData?.sort((a: cityDataType, b: cityDataType) => a.name.localeCompare(b.name));
                break;
            case "byCountryNameAlphaBet":
                return cityData.sort((a: cityDataType, b: cityDataType) => b.cou_name_en.localeCompare(a.cou_name_en));
                break;
            case "byCountryNameAlphaBetRev":
                return cityData?.sort((a: cityDataType, b: cityDataType) => a.cou_name_en.localeCompare(b.cou_name_en));
                break;
            case "byCountryCodeAlphaBet":
                return cityData?.sort((a: cityDataType, b: cityDataType) => b.country_code.localeCompare(a.country_code));
                break;
            case "byCountryCodeAlphaBetRev":
                return cityData?.sort((a: cityDataType, b: cityDataType) => a.country_code.localeCompare(b.country_code));
                break;
            case "byTimezoneAlphaBet":
                return cityData?.sort((a: cityDataType, b: cityDataType) => b.timezone.localeCompare(a.timezone));
                break;
            case "byTimezoneAlphaBetRev":
                return cityData?.sort((a: cityDataType, b: cityDataType) => a.timezone.localeCompare(b.timezone));
                break;
            case "byCoordinates":
                return cityData?.sort((a: cityDataType, b: cityDataType) => b.coordinates.lon - a.coordinates.lon);
                break;
            case "byCoordinatesRev":
                return cityData?.sort((a: cityDataType, b: cityDataType) => a.coordinates.lon - b.coordinates.lon);
                break;
            case "byTemp":

                return cityData?.sort((a: cityDataType, b: cityDataType) => {

                    if (a.temp === undefined) {
                        return 1;
                    } else if (b.temp === undefined) {
                        return -1;
                    } else {
                        return a.temp - b.temp;
                    }
                }

                );
                break;
            case "byTempRev":

                return cityData?.sort((a: cityDataType, b: cityDataType) => {

                    if (a.temp === undefined) {
                        return -1;
                    } else if (b.temp === undefined) {
                        return 1;
                    } else {
                        return b.temp - a.temp;
                    }
                }

                );
                break;
            case "reset":
            default:
                return cityData?.sort((a: cityDataType, b: cityDataType) => a.id - b.id);

        }
    }

    // ===================================

    //getUnicFilterValue

    function getAllFilterByCat(filterValue: string) {
        switch (filterValue) {
            case "cityName":
                return cityData?.map((data) => {
                    return data.name;
                });
                break;
            case "cou_name_en":
                return cityData?.map((data) => {
                    return data.cou_name_en;
                });
                break;
            case "country_code":
                return cityData?.map((data) => {
                    return data.country_code;
                });
                break;
            case "timezone":
                return cityData?.map((data) => {
                    return data.timezone;
                });
                break;
            case "coordinates":
                return cityData?.map((data) => {
                    const coorArray = Object.values(data.coordinates)
                    return coorArray.map((val, i) => val);
                });
                break;
                case "temp":
                    return cityData?.map((data) => {
                        return data.temp;
                    });
                    break;
            default:
                return cityData?.map((data) => {
                    return data;
                });
        }
    }

    function unicData(value: cityDataType[] | string[] | any): string[] {
        return [...new Set(value?.flat())] as string[];
    }

    const allUnicCityNames = unicData(getAllFilterByCat("cityName"));
    const allUnicCountryName = unicData(getAllFilterByCat("cou_name_en"));
    const allUnicCountryCode = unicData(getAllFilterByCat("country_code"));
    const allUnicTimezone = unicData(getAllFilterByCat("timezone"));
    const allUnicCoordinates = unicData(getAllFilterByCat("coordinates"));
    const allUnicTemp = unicData(getAllFilterByCat("temp"));

    // ===================================



    // ===================================

    return (
        <StamuraiTaskAppStates.Provider
            value={{
                cityData,
                handleSearch,
                setCityData,
                loadMore,
                setLoadMore,
                searchValue,
                setSearchValue,
                sortState,
                setSortState,
                selected,
                setSelected,
                sortFunc,
                allUnicCityNames,
                allUnicCountryName,
                allUnicCountryCode,
                allUnicTimezone,
                allUnicCoordinates,
                allUnicTemp,
                filterSelected,
                setFilterSelected,
                cityName,
                setCityName,
                cityNameData,
                setCityNameData,
                cityNameForecastData,
                setCityNameForecastData,
                saveTempToCityTable,
                setSaveTempToCityTable,
                saveTempToCityTableArray,
                setSaveTempToCityTableArray,
                getWeatherDataByCity,
                cityDataLimit,
            }}
        >
            {children}
        </StamuraiTaskAppStates.Provider>
    )
}

export const StamuraiAllState = () => {
    return useContext(StamuraiTaskAppStates)
};