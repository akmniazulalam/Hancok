import React from 'react'
import Image from './Image'
import Heading from './Heading'
import Flex from './Flex'
import { FaPlus } from "react-icons/fa";

const SaleItems = ({src, alt, heading, pText}) => {
  return (
    <div className='relative group cursor-pointer'>
        <Image src={src} alt={alt} className={"w-full h-full object-cover"}/>
        <Heading heading={heading} as={"h4"} className={"!font-barlow font-semibold text-[22px] pt-[15px] pb-[12px]"} />
        <p className='font-oswald text-base text-[#666666]'>{pText}</p>
        <Flex className={"pt-5 gap-x-4"}>
            <div className="bg-iconC py-2 px-1.5 text-white font-oswald text-sm">-40%</div>
            <p className='font-oswald text-base text-[#666666]'><del>$19.99</del></p>
            <p className='font-oswald text-base text-white'>$7.99</p>
        </Flex>
        <div className="absolute top-4 right-4 text-white h-[31px] w-[31px] flex justify-center items-center border border-white rounded-full bg-poly text-[15px] opacity-0 group-hover:opacity-100 transition-all duration-300"><FaPlus/></div>
        
    </div>
  )
}

export default SaleItems