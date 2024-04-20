



export interface StamuraiContextProviderPropsType {
    children: React.ReactNode;
}

export interface sortStateInterface {
    sort?: boolean;
    upSort?: boolean;
    downSort?: boolean;
}


// -------------forCityDataList===>TableBodyContaintRow_cityData--------------

export interface Coordinates {
    lon: number;
    lat: number;
}

export interface cityDataType {
    id: number;
    temp: number | undefined;
    geoname_id: string;
    name: string;
    ascii_name: string;
    alternate_names?: (string)[] | null;
    feature_class: string;
    feature_code: string;
    country_code: string;
    cou_name_en: string;
    country_code_2?: null;
    admin1_code: string;
    admin2_code: string;
    admin3_code?: null;
    admin4_code?: null;
    population: number;
    elevation?: null;
    dem: number;
    timezone: string;
    modification_date: string;
    label_en: string;
    coordinates: Coordinates;

}

// -------------forCityDataList===>TableBodyContaintRow_cityData--------------




// -------------forSingleCityWeatherData===>cityNameData--------------


export interface SingleCityWeatherDataType {
    coord: Coord;
    weather?: (WeatherEntity)[] | null;
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
export interface Coord {
    lon: number;
    lat: number;
}
export interface WeatherEntity {
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}
export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}
export interface Clouds {
    all: number;
}
export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}





export interface weatherDetailsArrayType {
    id: string,
    weatherName: string;
    weatherValue: string | number | undefined;
}



// -------------forSingleCityWeatherData===>cityNameData--------------



// -------------forSingleCityWeatherForecastData===>cityNameForecastData--------------


export interface cityNameForecastDataObjArrType {
    dayName: string;
    dt: number;
    main: Main;
    weather?: (WeatherEntity)[] | null;
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
}
export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}
export interface WeatherEntity {
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface Clouds {
    all: number;
}
export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}
export interface Sys {
    pod: string;
}



// -------------forSingleCityWeatherForecastData===>cityNameForecastData--------------




// -------------saveTempToCityTableType--------------

export interface saveTempToCityTableType {

    // cityName: string | undefined;
    // cityTemp: number | undefined;

    cityName: string | undefined;
    cityTemp: number | undefined;

}

// -------------saveTempToCityTableType--------------


// -------------allContext===>allContext--------------


export interface StamuraiStatesType {

    handleSearch: () => cityDataType[];
    cityData: cityDataType[];
    setCityData: (pre: cityDataType[]) => void;
    loadMore: number
    setLoadMore: (pre: number) => void;
    searchValue: string;
    setSearchValue: (pre: string) => void;
    sortState: sortStateInterface;
    setSortState: (pre: sortStateInterface) => void;
    selected: string | null
    setSelected: (pre: string | null) => void;
    sortFunc: (pre: string) => void
    allUnicCityNames: string[]
    allUnicCountryName: string[]
    allUnicCountryCode: string[]
    allUnicTimezone: string[]
    allUnicCoordinates: string[]
    allUnicTemp: string[]
    filterSelected: number | null
    setFilterSelected: (pre: number | null) => void;
    cityName: string
    setCityName: (pre: string) => void;
    cityNameData: SingleCityWeatherDataType | undefined;
    setCityNameData: (pre: SingleCityWeatherDataType | undefined) => void;
    cityNameForecastData: cityNameForecastDataObjArrType[] | undefined;
    setCityNameForecastData: (pre: cityNameForecastDataObjArrType[] | undefined) => void;
    saveTempToCityTable: saveTempToCityTableType;
    setSaveTempToCityTable: (pre: saveTempToCityTableType) => void;
    saveTempToCityTableArray: saveTempToCityTableType[];
    setSaveTempToCityTableArray: (pre: saveTempToCityTableType[]) => void;
    getWeatherDataByCity: ((name: any) => void) | undefined;
    cityDataLimit:number;
}

// -------------allContext===>allContext--------------


