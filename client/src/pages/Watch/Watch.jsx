import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import { video } from '../../assets'
import { Link } from 'react-router-dom'

const Watch = () => {
  return (
    <div className='w-screen h-screen ' >

      <Link to='/' className="flex justify-start items-center gap-[1rem] absolute top-[10px] left-[10px] text-white cursor-pointer z-[80] ">
        <ArrowBackOutlined />
        <span className=' ' >Home</span>
      </Link>

      <video
        src={video}
        autoPlay={true}
        loop={true}
        controls={true}
        className='w-full h-full object-cover '
      />


    </div>
  )
}

export default Watch