"use client"

import React, { memo, useEffect, useCallback } from 'react'

import Header from "./component/Header";
import Cities from "./component/Cities";
import { StamuraiAllState } from './context/StamuraiContextProvider';

import Head from 'next/head';

function Home(): React.JSX.Element {

  const contextState = StamuraiAllState()

  const saveTempToCityTable = contextState?.saveTempToCityTable

  const saveTempToCityTableArray = contextState?.saveTempToCityTableArray
  const setSaveTempToCityTableArray = contextState?.setSaveTempToCityTableArray

  // =============================

  const ifInsaveTempToCityTableArray = saveTempToCityTableArray && saveTempToCityTableArray.some((val) => val.cityName === (saveTempToCityTable && saveTempToCityTable.cityName))

  const CallBackForSaveTempToCityTable = useCallback(() => {
    ((saveTempToCityTable && saveTempToCityTable.cityName !== "") && saveTempToCityTableArray) && (setSaveTempToCityTableArray && setSaveTempToCityTableArray(

      (saveTempToCityTableArray.length > 0 && ifInsaveTempToCityTableArray) ? [...saveTempToCityTableArray] : [...saveTempToCityTableArray, saveTempToCityTable]

    ))
  }, [])

  useEffect(() => {
    CallBackForSaveTempToCityTable()
  }, [saveTempToCityTable])

  return (
    <main className={` m-auto max-w-[1440px] flex `}>
      <Head>
        <title>My Next.js Page</title>
      </Head>
      <Header dynamicBackColor={"bg-slate-400"} specificClass={"self-start h-[100%]"} />
      <Cities />
    </main>
  );
}

export default memo(Home);