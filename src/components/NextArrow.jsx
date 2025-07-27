import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const NextArrow = ({onClick}) => {
  return (
    <div onClick={onClick} className='z-10 w-10 h-10 rounded-full border border-white flex justify-center items-center text-[20px] cursor-pointer absolute bottom-22 right-0'>
        <FaAngleRight className='text-white'/>
    </div>
  )
}

export default NextArrow