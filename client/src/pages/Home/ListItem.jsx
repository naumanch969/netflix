import React, { useEffect, useRef, useState } from 'react'
import { thumbnail, video } from '../../assets'
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from '../../redux/actions/movie'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const ListItem = ({ movieId, index }) => {

  const [isHovered, setIsHovered] = useState(false)
  const trailer = 'https://player.vimeo.com/external/408338951.sd.mp4?s=3fb7a9cf64497e46c3e74bc876ed3a3425a88ad5&profile_id=165&oauth2_token_id=57447761'
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const call = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5500/movie/${movieId}`, {
          headers: {
            authtoken: JSON.parse(Cookies.get('profile')).token
          }
        })
        setMovie(data.result)
      } catch (error) {
        console.log('error in getMovie')
      }
    }
    call()
  }, [])

  return (
    <Link to={{ pathname: '/watch', movie }} >
      <div
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={` ${isHovered && 'w-[325px] h-[300px] shadow-card-shadow absolute top-[-150px] rounded-[5px] '} flex flex-col h-[120px] w-[225px] bg-main-color text-white mr-[5px] overflow-hidden cursor-pointer `}
      >

        <img src={movie?.thumbnail} alt="" className={`${isHovered ? 'w-[325px] h-[140px]' : 'w-full h-full'} object-cover `} />
        {
          isHovered &&
          <>
            <video src={video} autoPlay={true} loop className='w-full h-[140px] object-cover absolute top-0 left-0 z-[80] ' />

            <div className="flex flex-col justify-center gap-[5px] p-[10px] pt-[5px] ">
              <div className="flex justify-start items-center gap-[10px] p-[5px] ">
                <PlayArrow style={{ fontSize: '28px' }} className=' blist-[1px] blist-white p-[5px] rounded-full ' />
                <Add style={{ fontSize: '28px' }} className=' blist-[1px] blist-white p-[5px] rounded-full ' />
                <ThumbUpAltOutlined style={{ fontSize: '28px' }} className=' blist-[1px] blist-white p-[5px] rounded-full ' />
                <ThumbDownAltOutlined style={{ fontSize: '28px' }} className=' blist-[1px] blist-white p-[5px] rounded-full ' />
              </div>
              <div className="flex items-center text-[14px] font-semibold text-gray-500 ">
                <span>2 hours 1 min</span>
                <span className='mx-[10px] blist-[1px] blist-gray py-[1px] px-[3px]  ' >{movie?.limit}</span>
                <span>{movie?.year}</span>
              </div>
              <div className="text-[13px] ">{movie?.description} </div>
              <div className="text-[14px] text-gray-200 ">{movie?.genre}</div>
            </div>
          </>
        }
      </div>
    </Link>
  )
}

export default ListItem