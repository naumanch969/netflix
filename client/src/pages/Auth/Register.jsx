import { useRef, useState } from 'react'
import { logo, register } from '../../assets'
import { Link } from 'react-router-dom'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

    return (
        <div
            style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%), url(${register})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            className="w-screen h-screen relative bg-cover bg-no-repeat "
        >

            <div className="top">
                <div className="py-[20px] px-[50px] flex justify-between items-center ">
                    <img src={logo} alt="netflix logo" className="h-[40px] " />
                    <Link to='/auth/login' className='z-[50] ' >
                        <button className='bg-red-700 text-white blist-none rounded-[5px] py-[5px] px-[15px] text-[1rem] font-medium cursor-pointer ' >Sign In</button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-[1rem] w-full h-full text-white absolute top-0 left-0 ">
                <h1 className='text-[50px] font-semibold ' >Unlimited movies, TV shows and more.</h1>
                <h2 className='text-[18px] font-medium '>Watch anywhere. Cancel anytime.</h2>
                <div className='flex flex-col justify-center items-center gap-[8px] w-full ' >
                    <p className='text-[20px]' >Ready to watch? Enter your email to create or restart your membership.</p>
                    {
                        email
                            ?
                            <form className="w-[50%] bg-white flex items-center justify-between mt-[20px] h-[50px] rounded-[5px] ">
                                <input type="password" ref={passwordRef} onClick={handleFinish} placeholder="Password" className='flex-[9] h-full text-black outline-none blist-none px-[10px] rounded-l-[5px] ' />
                                <button className="flex-[3] h-full bg-red-700 blist-none text-white text-[22px] cursor-pointer rounded-r-[5px] " >Finish</button>
                            </form>
                            :
                            <div className="w-[50%] bg-white flex items-center justify-between mt-[20px] h-[50px] rounded-[5px] ">
                                <input type="email" ref={emailRef} onClick={handleStart} placeholder="email@gmail.com" className='flex-[9] h-full text-black outline-none blist-none px-[10px] rounded-l-[5px] ' />
                                <button className="flex-[3] h-full bg-red-700 blist-none text-white text-[22px] cursor-pointer rounded-r-[5px] " >Get Started</button>
                            </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Register