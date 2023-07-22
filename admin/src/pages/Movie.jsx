import { useDispatch, useSelector } from 'react-redux'
import { Publish, Clear } from '@mui/icons-material'
import { useState, useRef, useEffect } from 'react'
import { BrokenImage } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { getMovie } from '../redux/actions/movie'
import { updateMovie } from '../redux/actions/movie'
import { person1 } from '../assets'
import FileBase from 'react-file-base64'
import { Chart } from '../components'

const Movie = () => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const { id } = useParams()
    const dispatch = useDispatch()
    const imageRef = useRef(null)
    const trailerRef = useRef(null)
    const videoRef = useRef(null)
    const { currentMovie: movie, isFetching } = useSelector(state => state.movie)

    //////////////////////////////////////// States ////////////////////////////////////////
    const [movieData, setMovieData] = useState({ ...movie })

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
    useEffect(() => {
        dispatch(getMovie(id))        // use useMemo here 
    }, [])

    //////////////////////////////////////// Functions ////////////////////////////////////////
    // update movie
    const handleUpdateMovie = (e) => {
        e.preventDefault()
        dispatch(updateMovie(movie._id, { ...movieData }))
    }
    // changing input values
    const handleChange = (e) => {
        setMovieData({ ...movieData, [e.target.name]: e.target.value })
    }
    // image
    const handleImageButtonClick = (e) => {
        e.preventDefault();
        imageRef.current.querySelector('input[type="file"]').click();
    }
    const handleAddImage = (files) => {
        setMovieData({ ...movieData, thumbnail: files.base64 })
    }
    const handleDeleteImage = () => {
        setMovieData({ ...movieData, thumbnail: '' })
    }
    // trailer
    const handleTrailerButtonClick = (e) => {
        e.preventDefault();
        trailerRef.current.querySelector('input[type="file"]').click();
    }
    const handleAddTrailer = (files) => {
        setMovieData({ ...movieData, trailer: files.base64 })
    }
    const handleDeleteTrailer = () => {
        setMovieData({ ...movieData, trailer: '' })
    }
    // video
    const handleVideoButtonClick = (e) => {
        e.preventDefault();
        videoRef.current.querySelector('input[type="file"]').click();
    }
    const handleAddVideo = (files) => {
        setMovieData({ ...movieData, video: files.base64 })
    }
    const handleDeleteVideo = () => {
        setMovieData({ ...movieData, video: '' })
    }

    return (
        <div className='w-full md:flex-[4] h-full overflow-y-scroll ' >

            <div className="w-full px-[2rem] pt-[12px] pb-[2rem] " >

                {/* title */}
                <div className="flex items-center justify-between ">
                    <h1 className="font-bold text-[32px]  ">Movie</h1>
                    <Link to='/newMovie' >
                        <button className="blist-none py-[4px] px-[1rem] bg-darkBlue rounded-[4px] cursor-pointer text-white text-[16px]  ">Create</button>
                    </Link>
                </div>

                {/* chart */}
                <div className="w-full flex md:flex-row flex-col gap-[1rem] h-[24rem] my-[16px] ">
                    <div className="w-full md:flex-1 ">
                        <Chart data={movieData} dataKey='sales' title='Sales Performance' />
                    </div>
                    <div className="w-full md:flex-1 flex flex-col justify-start p-[20px] shadow-box">
                        <div className='w-full flex justify-center relative ' >
                            <hr className='absolute top-[50%] text-lightGray h-[2px] w-full shadow-box ' />
                            <img src={person1} alt="thumbnail" className="w-[10rem] h-[10rem] rounded-[12px] object-cover mr-[20px] z-10 " />
                        </div>
                        <div className="mt-[12px] flex flex-col gap-[1rem] ">
                            <h3 className="font-semibold text-[28px] ">{movie.title}</h3>
                            <div className="flex justify-between lg:w-[60%] w-full ">
                                <h5 className="font-medium text-[18px] ">id:</h5>
                                <p className="font-light ">{movie._id}</p>
                            </div>
                            <div className="flex justify-between lg:w-[60%] w-full ">
                                <h5 className="font-medium text-[18px] ">Sales:</h5>
                                <p className="font-light ">${movie.price}</p>
                            </div>
                            <div className="flex justify-between lg:w-[60%] w-full ">
                                <h5 className="font-medium text-[18px] ">in stock:</h5>
                                <p className="font-light ">{movie.inStock}</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* edit form */}
                <div className="w-full flex p-[20px] mt-[1rem] shadow-box ">
                    <form className="newMovieForm flex flex-wrap gap-[20px] " >
                        {/* thumbnail */}
                        <div className="w-full md:w-[25rem] flex justify-center items-center flex-col">
                            {
                                movieData.thumbnail
                                    ?
                                    <div className="relative w-[7rem] h-[7rem] p-[8px] rounded-full flex justify-center items-center  " >
                                        <img src={movieData.thumbnail} alt="" className="rounded-full w-full h-full " />
                                        <button onClick={() => handleDeleteImage()} className="absolute top-[0px] right-[0px] text-white   " ><Clear /></button>
                                    </div>
                                    :
                                    <div ref={imageRef} id="filebase_image" className=" w-[7rem] h-[7rem] p-[8px] rounded-full bg-lightGray  flex justify-center items-center " >
                                        <button onClick={handleImageButtonClick} className="flex flex-col justify-center items-center text-textGray  " >
                                            <Publish /> Add Photo
                                        </button>
                                        <FileBase type="file" onDone={(filesArr) => { handleAddImage(filesArr) }} />
                                    </div>
                            }
                        </div>
                        {/* trailer */}
                        <div className="w-full md:w-[25rem] flex justify-center items-center flex-col">
                            {
                                movieData.trailer
                                    ?
                                    <div className="relative w-[7rem] h-[7rem] p-[8px] rounded-full flex justify-center items-center  " >
                                        <video src={movieData.trailer} alt="" className="rounded-full w-full h-full " />
                                        <button onClick={() => handleDeleteTrailer()} className="absolute top-[0px] right-[0px] text-white   " ><Clear /></button>
                                    </div>
                                    :
                                    <div ref={trailerRef} id="filebase_image" className=" w-[7rem] h-[7rem] p-[8px] rounded-full bg-lightGray  flex justify-center items-center " >
                                        <button onClick={handleTrailerButtonClick} className="flex flex-col justify-center items-center text-textGray  " >
                                            <Publish /> Add Photo
                                        </button>
                                        <FileBase type="file" onDone={(filesArr) => { handleAddTrailer(filesArr) }} />
                                    </div>
                            }
                        </div>
                        {/* video */}
                        <div className="w-full md:w-[25rem] flex justify-center items-center flex-col">
                            {
                                movieData.video
                                    ?
                                    <div className="relative w-[7rem] h-[7rem] p-[8px] rounded-full flex justify-center items-center  " >
                                        <video src={movieData.video} alt="" className="rounded-full w-full h-full " />
                                        <button onClick={() => handleDeleteVideo()} className="absolute top-[0px] right-[0px] text-white   " ><Clear /></button>
                                    </div>
                                    :
                                    <div ref={trailerRef} id="filebase_image" className=" w-[7rem] h-[7rem] p-[8px] rounded-full bg-lightGray  flex justify-center items-center " >
                                        <button onClick={handleVideoButtonClick} className="flex flex-col justify-center items-center text-textGray  " >
                                            <Publish /> Add Photo
                                        </button>
                                        <FileBase type="file" onDone={(filesArr) => { handleAddVideo(filesArr) }} />
                                    </div>
                            }
                        </div>
                        {/* title */}
                        <div className="w-full md:w-[25rem] flex flex-col">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >title</label>
                            <input onChange={handleChange} value={movieData.title} name='title' className="h-[20px] px-[12px] py-[20px] list-[1px] blist-gray-500 rounded-[4px] " type="text" placeholder="Title" />
                        </div>
                        {/* description */}
                        <div className="w-full md:w-[25rem] flex flex-col">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Description</label>
                            <input onChange={handleChange} value={movieData.description} name='description' className="h-[20px] px-[12px] py-[20px] list-[1px] blist-gray-500 rounded-[4px] " type="text" placeholder="Description" />
                        </div>
                        {/* year */}
                        <div className="w-full md:w-[25rem] flex flex-col">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Year</label>
                            <input onChange={handleChange} value={movieData.year} name='year' className="h-[20px] px-[12px] py-[20px] list-[1px] blist-gray-500 rounded-[4px] " type="number" placeholder="Year" />
                        </div>
                        {/* limit */}
                        <div className="w-full md:w-[25rem] flex flex-col">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Limit</label>
                            <input onChange={handleChange} value={movieData.year} name='limit' className="h-[20px] px-[12px] py-[20px] list-[1px] blist-gray-500 rounded-[4px] " type="number" placeholder="Limit" />
                        </div>
                        {/* isSeries */}
                        <div className="w-full md:w-[25rem] flex flex-col ">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Is Series</label>
                            <select multiple={false} onChange={handleChange} value={movieData.isSeries} className="newMovieSelect h-[40px] px-[12px] w-full rounded-[6px] list-[1px] blist-gray-500 " name="isSeries" id="active" >
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        {/* genre */}
                        <div className="w-full md:w-[25rem] flex flex-col ">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >genre</label>
                            <select multiple={false} onChange={handleChange} value={movieData.genre} className="newMovieSelect h-[40px] px-[12px] w-full rounded-[6px] list-[1px] blist-gray-500 " name="genre" id="active" >
                                <option value="action">action</option>
                                <option value="comedy">comedy</option>
                                <option value="documentry">documentry</option>
                                <option value="horror">horror</option>
                                <option value="crime">crime</option>
                            </select>
                        </div>


                        {/* buttons */}
                        <div className=" w-full flex justify-start " >
                            <button onClick={handleUpdateMovie} className="w-[200px] blist-none bg-darkBlue text-white px-[12px] py-[8px] rounded-[8px] font-semibold cursor-pointer mt-[32px] ">
                                {isFetching ? 'Loading...' : 'Update'}
                            </button>
                        </div>

                    </form>
                </div>


            </div>

        </div>
    )
}

export default Movie;