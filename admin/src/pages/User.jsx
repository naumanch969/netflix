import { useParams } from 'react-router-dom'
import { person1, person2 } from '../assets'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish, Clear } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, updateUser } from '../redux/actions/user'
import { useState, useRef, useEffect } from 'react'
import FileBase from 'react-file-base64'

const User = ({ users, setUsers }) => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const { id } = useParams()
    const dispatch = useDispatch()
    const fileBase64Ref = useRef(null)
    const { currentUser: user, isFetching } = useSelector(state => state.user)

    // const user = users.find(user => user._id == id)

    //////////////////////////////////////// States ////////////////////////////////////////
    const [userData, setUserData] = useState(user)

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
    useEffect(() => {
        dispatch(getUser(id))        // use useMemo here 
    }, [])


    //////////////////////////////////////// Functions ////////////////////////////////////////
    const handleUpdateUser = (e) => {
        e.preventDefault()
        dispatch(updateUser(id, userData))
    }
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const handleImageButtonClick = () => {
        fileBase64Ref.current.querySelector('input[type="file"]').click();
    }
    const addImageFunc = (files) => {
        setUserData({ ...userData, avatar: files[0].base64 })
    }
    const deleteTestimonialImageFunc = () => {
        setUserData({ ...userData, avatar: '' })
    }


    return (
        <div className='flex-[4] h-full overflow-y-scroll ' >

            {/* title */}
            <div className="w-full px-[2rem] pt-[12px] pb-[2rem] " >
                <div className="userTitleContainer flex items-center justify-between ">
                    <h1 className="userTitle font-bold text-[24px]  ">Edit User</h1>
                    <Link to='/newUser' >
                        <button className="py-[4px] px-[1rem] bg-teal-700 rounded-[4px] cursor-pointer bg-darkBlue text-white text-[16px]  ">Create</button>
                    </Link>
                </div>


                <div className="userContainer flex md:flex-row flex-col gap-[20px] mt-[20px] ">
                    {/* left side - user display */}
                    <div className="userShow flex-1 p-[20px] shadow-box ">
                        {/* top section */}
                        <div className="userShowTop flex items-center gap-[12px] " >
                            <img src={person2} alt="" className="userShowImage w-[40px] h-[40px] rounded-full object-cover " />
                            <div className="userShowTopTitle flex flex-col ">
                                <span className="userShowUsername font-semibold ">{userData.username}</span>
                                <span className="userShowUserTitle font-light ">Software Engineer</span>
                            </div>
                        </div>
                        {/* bottom section */}
                        <div className="userShowBottom mt-[20px] ">
                            <h4 className="userShowTitle text-[18px] font-semibold text-lightGray ">Account Details</h4>
                            <div className="userShowInfo flex items-center gap-[12px] my-[20px] text-gray "><PermIdentity style={{ fontSize: '18px' }} /><span className="userShowInfoTitle">{user?.username}</span></div>
                            <div className="userShowInfo flex items-center gap-[12px] my-[20px] text-gray "><CalendarToday style={{ fontSize: '18px' }} /><span className="userShowInfoTitle">10.12.2003</span></div>
                            <h4 className="userShowTitle text-[18px] font-semibold text-lightGray ">Account Contacts</h4>
                            <div className="userShowInfo flex items-center gap-[12px] my-[20px] text-gray "><PhoneAndroid style={{ fontSize: '18px' }} /><span className="userShowInfoTitle">+1 231 521 122</span></div>
                            <div className="userShowInfo flex items-center gap-[12px] my-[20px] text-gray "><MailOutline style={{ fontSize: '18px' }} /><span className="userShowInfoTitle">{user?.email}</span></div>
                            <div className="userShowInfo flex items-center gap-[12px] my-[20px] text-gray "><LocationSearching style={{ fontSize: '18px' }} /><span className="userShowInfoTitle">Lahore | Pakistan</span></div>
                        </div>
                    </div>

                    {/* right side - edit option */}
                    <div className="userUpdate flex-[2] p-[20px] box-shadow">
                        <h4 className="userShowTitle text-[24px] font-semibold text-lightGray ">Edit</h4>

                        <form className="newUserForm flex flex-wrap gap-[20px] " >
                            {/* thumbnail */}
                            <div className="newUserItem w-[25rem] flex justify-center items-center flex-col">
                                {
                                    userData?.avatar
                                        ?
                                        <div
                                            className="relative w-[7rem] h-[7rem] p-[8px] rounded-full flex justify-center items-center  " >
                                            <img src={userData.avatar} alt="" className="rounded-full " />
                                            <button onClick={() => deleteTestimonialImageFunc()} className="absolute top-[0px] right-[0px] text-white   " ><Clear /></button>
                                        </div>
                                        :
                                        <div ref={fileBase64Ref} id="filebase_image" className=" w-[7rem] h-[7rem] p-[8px] rounded-full bg-lightGray  flex justify-center items-center " >
                                            <button onClick={() => handleImageButtonClick()} className="flex flex-col justify-center items-center text-textGray  " >
                                                <Publish /> Add Photo
                                            </button>
                                            <FileBase type="file" onDone={(filesArr) => { addImageFunc(filesArr) }} />
                                        </div>
                                }
                            </div>
                            {/* name */}
                            {/* username */}
                            <div className="newUserItem w-[25rem] flex flex-col">
                                <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >username</label>
                                <input onChange={handleChange} value={userData.username} name='username' className="h-[20px] px-[12px] py-[20px] blist-[1px] blist-gray-500 rounded-[4px] " type="text" placeholder="username" />
                            </div>
                            {/* email */}
                            <div className="newUserItem w-[25rem] flex flex-col">
                                <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >email</label>
                                <input onChange={handleChange} value={userData.email} name='email' className="h-[20px] px-[12px] py-[20px] blist-[1px] blist-gray-500 rounded-[4px] " type="text" placeholder="email" />
                            </div>
                            {/* password */}
                            <div className="newUserItem w-[25rem] flex flex-col">
                                <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >password</label>
                                <input onChange={handleChange} value={userData.password} name='password' className="h-[20px] px-[12px] py-[20px] blist-[1px] blist-gray-500 rounded-[4px] " type="text" placeholder="password" />
                            </div>

                            {/* buttons */}
                            <div className=" w-full flex justify-start " >
                                <button onClick={handleUpdateUser} className="w-[200px] blist-none bg-darkBlue text-white px-[12px] py-[8px] rounded-[8px] font-semibold cursor-pointer mt-[32px] ">
                                    {isFetching ? 'Loading...' : 'Update'}
                                </button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default User;