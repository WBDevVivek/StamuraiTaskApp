import React, { memo } from 'react'
import { flexRowJustCenItemsCen, sectionStyle } from '../tailStyleClasses'
import Link from 'next/link'
import Image from './Image'


interface HeaderPropsType {
  dynamicBackColor: string;
  specificClass: string;
}


const Header: React.FC<HeaderPropsType> = ({ dynamicBackColor, specificClass }): React.JSX.Element => {
  return (


    <header className={` bg-darkContaintColor w-[70px] rounded-3xl md:mr-4  ${specificClass}
      flex flex-col justify-start items-center  fixed  
      `}>

      <Link href="/" className={` m-2 ${flexRowJustCenItemsCen}  h-[70px] rounded-xl
          ${dynamicBackColor}
          `}>
        <Image imgUrl={"../StamuraiLogo.png"} className={`w-[100%] h-[70%]`}></Image>
      </Link>

      <Link href={`/weather/pune`} className={` m-2 ${flexRowJustCenItemsCen} h-[40px] rounded-xl
          ${dynamicBackColor}
          `}>
        <Image imgUrl={"../weatherIcon.png"} className={` w-[100%] h-[70%]`}></Image>
      </Link>
      <Link href="/" className={` m-2 ${flexRowJustCenItemsCen}  h-[40px] rounded-xl
          ${dynamicBackColor}
          `}>
        <Image imgUrl={"../citiesIcon.png"} className={`w-[100%] h-[70%]`}></Image>
      </Link>
    </header>
  )
}

export default memo(Header)