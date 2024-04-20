import React, { memo } from 'react'


interface imgCompProps {
  imgUrl: string;
  className?: string;
}


const Image: React.FC<imgCompProps> = ({ imgUrl, className = "text-base" }): React.JSX.Element  => {
  return (
    <img className={className} src={imgUrl} alt="image" />
  )
}

export default  memo(Image)