import React, { memo } from 'react'
import { StamuraiAllState } from '../context/StamuraiContextProvider';
import { closeIcon, searchIcon } from '../data';
import { flexRowJustBetItemsCen } from '../tailStyleClasses';

const Search: React.FC = (): React.JSX.Element => {

  const contextState = StamuraiAllState()

  const searchValue = contextState?.searchValue
  const setSearchValue = contextState?.setSearchValue

  return (

    <div className={` flex flex justify-start md:justify-center items-center  m-4`}>
      <label
        className={`w-[20px] text-[30px] mr-2 ${flexRowJustBetItemsCen} `}
        htmlFor="searchBar"
        onClick={() =>setSearchValue && setSearchValue("")}
      >
        {!searchValue ? searchIcon : closeIcon}
      </label>
      <input
        type="text"
        id="searchBar"
        value={searchValue}
        onChange={(e) => setSearchValue && setSearchValue(e.target.value.toLowerCase())}
        className={`rounded w-6/12 bg-darkContaintColor min-w-[150px] max-w-[400px]  text-[20px] font-bold`}
      />
    </div>
  )
}

export default memo(Search)