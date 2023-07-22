import { useRef, useState } from 'react'
import { logo, login as login_background } from '../../assets'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/user'
import Cookies from 'js-cookie'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({ email: '', password: '' })

    const handleLogin = (e) => {
        e.preventDefault()
        if(!userData.email || !userData.password) return alert('Please provide all the fields.')
        dispatch(login(userData, navigate))
    }

    return (
        <div
            style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%), url(${login_background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            className="w-screen h-screen relative bg-cover "
        >


            <div className="top">
                <div className="py-[20px] px-[50px] flex justify-between items-center ">
                    <img src={logo} alt="netflix logo" className="h-[40px] " />
                </div>
            </div>

            <div className="w-full h-full text-white absolute top-0 left-0 flex flex-col justify-center items-center ">
                <form onSubmit={handleLogin} className='flex flex-col justify-around w-[300px] h-[310px] rounded-[5px] bg-main-color p-[10px] ' >
                    <h1 className='text-[25px] ' >Sign In</h1>
                    <input type="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder='Email or phone number' className='outline-none blist-none h-[40px] rounded-[4px] bg-gray-500 text-white pl-[10px] placeholder:text-gray-100 ' />
                    <input type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} placeholder='Password' className='outline-none blist-none h-[40px] rounded-[4px] bg-gray-500 text-white pl-[10px] placeholder:text-gray-100 ' />
                    <button type='submit' className='h-[40px] rounded-[5px] bg-red-700 text-white blist-none text-[18px] font-medium cursor-pointer ' >Sign in</button>
                    <span className='text-gray-200 ' >New to Netflix? {'  '}
                        <Link to='/auth/register' >
                            <b className='text-white ' >Sign up now</b>
                        </Link>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHOR to ensure you're not a bot. <b className='hover:underline cursor-pointer ' >Learn more</b>
                    </small>
                </form>
            </div>

        </div>
    )
}

export default Login