



// -----------------------------------------------------------



async function getCityListData(loadMore:number, cityDataLimit:number) {

//cities from india
  const cityListURL: string = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${cityDataLimit}&lang=en&refine=timezone%3A%22Asia%22&refine=cou_name_en%3A%22India%22&start=${loadMore}`

    const response = await fetch(cityListURL);

    if (!response.ok) {
        throw new Error(response.statusText)
      }
    const data = await response.json() ;
    return await data?.results ;
}


// -----------------------------------------------------------

async function getCityNameData(cityName: string) {

  const cityNameURL: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a6ff0dd3241dc627e2ef6cec45c2f619&units=metric`

  const response = await fetch(cityNameURL);

  if (!response.ok) {
      throw new Error(response.statusText)
    }
  const data = await response.json() ;
  return await data ;
}

// -----------------------------------------------------------


async function getCityForeCastData(cityName: string) {

  const cityForeCastURL: string = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=a6ff0dd3241dc627e2ef6cec45c2f619&units=metric`

  const response = await fetch(cityForeCastURL);

  if (!response.ok) {
      throw new Error(response.statusText)
    }
  const data = await response.json() ;
  return await data ;
}


// ----------------------------------------------


export {
    getCityListData, getCityNameData, getCityForeCastData
}




