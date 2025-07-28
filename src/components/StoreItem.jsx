import React from 'react'
import Image from './Image'
import Heading from './Heading'

const StoreItem = ({src, alt, className, heading}) => {
  return (
    <div className='py-[20px] px-[38px] bg-poly text-center cursor-pointer'>
        <p className='font-oswald font-medium text-[40px] text-white'>$95</p>
        <Image src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
        <Heading heading={heading} as={"h5"} className={"font-semibold text-[25px]"} />
        <p className='font-oswald font-semibold text-base text-iconC pt-2 uppercase'>Add To Cart</p>
    </div>
  )
}

export default StoreItem