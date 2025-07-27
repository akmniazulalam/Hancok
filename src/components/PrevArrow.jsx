import React from 'react'
import { FaAngleLeft } from "react-icons/fa";

const PrevArrow = ({onClick}) => {
  return (
    <div onClick={onClick} className='w-10 h-10 rounded-full border border-white flex justify-center items-center text-[20px] cursor-pointer absolute bottom-7 right-0 z-10'>
        <FaAngleLeft className='text-white'/>
    </div>
  )
}

export default PrevArrow