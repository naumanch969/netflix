import { Search, ArrowDropDown, Notifications } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { background, logo } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showOptins, setShowOptions] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // window.pageYOffset
    window.onscroll = () => {
        setIsScrolled(window.scrollY == 0 ? false : true)
        return () => window.onscroll = null
    }



    return (
        <div className={`text-white text-[14px] fixed top-0 w-full z-[999] transition-all duration-100 ${isScrolled ? 'bg-main-color ' : 'bg-transparent '} `} >
            {/* linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 50%) */}

            <div className="px-[50px] flex items-center justify-between h-[70px] ">
                <div className="left flex items-center gap-[20px] ">
                    <img src={logo} alt="netflix" className="h-[25px] mr-[20px] " />
                   <Link to='/' ><span className='cursor-pointer  ' >Home</span></Link>
                   <Link to='/series' ><span className='cursor-pointer  ' >Series</span></Link>
                   <Link to='/movies' ><span className='cursor-pointer  ' >Movies</span></Link>
                   <Link to='/new' ><span className='cursor-pointer  ' >New and Popular</span></Link>
                   <Link to='/list' ><span className='cursor-pointer  ' >My List</span></Link>
                </div>
                <div className="flex items-center ">
                    <Search className='mx-[15px] cursor-pointer ' />
                    <span>KID</span>
                    <Notifications className='mx-[15px] cursor-pointer' />
                    <img src={background} alt='' className='h-[30px] w-[30px] rounded-full object-cover cursor-pointer ' />
                    <div onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)} className="profile">
                        <ArrowDropDown className='mx-[15px] cursor-pointer' />
                        <div className={`options ${showOptins ? 'flex flex-col absolute bg-main-color rounded-[5px] ' : 'hidden'}  `} >
                            <span className='p-[10px] cursor-pointer ' >Settings</span>
                            <span className='p-[10px] cursor-pointer ' >Logout</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar