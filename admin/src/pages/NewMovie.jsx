import { useSelector, useDispatch } from 'react-redux'
import { createMovie } from '../redux/actions/movie'
import { useState, useRef, useEffect } from 'react'
import { Publish, Clear } from '@mui/icons-material'
import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router-dom'

const NewMovie = () => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const colors = [
        { color: 'blue', hex: '#2a7ade' },
        { color: 'red', hex: '#d95087' },
        { color: 'green', hex: '#3bb077' },
        { color: 'teal', hex: '#008080' },
        { color: 'white', hex: '#fff' },
        { color: 'black', hex: '#000' },
    ]
    const sizes = [
        { size: 'XL', value: 'XL' },
        { size: 'L', value: 'L' },
        { size: 'M', value: 'M' },
        { size: 'S', value: 'S' },
        { size: 'XS', value: 'XS' },
    ]
    const dispatch = useDispatch()
    const navigtae = useNavigate()
    const imageRef = useRef(null)
    const trailerRef = useRef(null)
    const videoRef = useRef(null)
    const initialMovieState = { title: '', description: '', inStock: true, categories: '', thumbnail: '', price: '', size: sizes[0].value, color: colors[0].hex }
    const { isFetching } = useSelector(state => state.movie)

    //////////////////////////////////////// States ////////////////////////////////////////
    const [movieData, setMovieData] = useState(initialMovieState)

    //////////////////////////////////////// UseEffects ////////////////////////////////////////


    //////////////////////////////////////// Functions ////////////////////////////////////////
    const handleCreateMovie = (e) => {
        e.preventDefault()
        dispatch(createMovie(movieData))
        // setMovieData(initialMovieState)
    }
    const handleChange = (e) => {
        setMovieData({ ...movieData, [e.target.name]: e.target.value })
    }

    const handleFileInput = (file, field) => {
        setMovieData({ ...movieData, [field]: file.base64 })
    }
    const handleFileDelete = (field) => {
        setMovieData({ ...movieData, [field]: '' })
    }

    useEffect(() => {
        console.log('movieDat', movieData)
    }, [movieData])

    return (
        <div className='w-full md:flex-[4] h-full overflow-y-scroll ' >

            <div className="w-full px-[2rem] pt-[12px] pb-[2rem] " >
                <h1 className="font-bold text-[32px] mb-[1rem]  ">New Movie</h1>

                <form className="newMovieForm flex flex-wrap gap-[20px] " >
                    {/* thumbnail */}
                    <div className="w-full lg:w-[30%] md:w-[46%] flex justify-center items-center flex-col">
                        {
                            movieData.thumbnail
                                ?
                                <div className="relative w-full h-[12rem] p-[8px] rounded-[2px] flex justify-center items-center overflow-hidden " >
                                    <img src={movieData.thumbnail} alt="" className="w-full h-full " />
                                    <button onClick={() => handleFileDelete('thumbnail')} className="absolute top-[10px] right-[10px] text-black   " ><Clear /></button>
                                </div>
                                :
                                <FileBase type="file" onDone={(file) => handleFileInput(file, 'thumbnail')} />
                        }
                    </div>
                    {/* trailer */}
                    <div className="w-full lg:w-[30%] md:w-[46%] flex justify-center items-center flex-col">
                        {
                            movieData.trailer
                                ?
                                <div className="relative w-full h-[12rem] p-[8px] rounded-[2px] flex justify-center items-center overflow-hidden " >
                                    <video src={movieData.trailer} autoPlay={true} loop={true} controls={true} className="w-full h-full " />
                                    <button onClick={() => handleFileDelete('trailer')} className="absolute top-[10px] right-[10px] text-black   " ><Clear /></button>
                                </div>
                                :
                                <FileBase type="file" onDone={(file) => handleFileInput(file, 'trailer')} />
                        }
                    </div>
                    {/* video */}
                    <div className="w-full lg:w-[30%] md:w-[46%] flex justify-center items-center flex-col">
                        {
                            movieData.video
                                ?
                                <div className="relative w-full h-[12rem] p-[8px] rounded-[2px] full flex justify-center items-center overflow-hidden " >
                                    <video src={movieData.video} autoPlay={true} loop={true} controls={true} className=" w-full h-full " />
                                    <button onClick={() => handleFileDelete('video')} className="absolute top-[10px] right-[10px] text-black   " ><Clear /></button>
                                </div>
                                :
                                <FileBase type="file" onDone={(file) => handleFileInput(file, 'video')} />
                        }
                    </div>
                    {/* title */}
                    <div className="w-full lg:w-[30%] md:w-[46%] flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-gray " >title</label>
                        <input onChange={handleChange} value={movieData.title} name='title' className="border-[1px] border-gray h-[20px] px-[12px] py-[20px] list-[1px] blist-gray-500 rounded-[4px] " type="text" placeholder="Title" />
                    </div>
                    {/* description */}
                    <div className="w-full lg:w-[30%] md:w-[46%] flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-gray " >Description</label>
                        <input onChange={handleChange} value={movieData.description} name='description' className="border-[1px] border-gray h-[20px] px-[12px] py-[20px] list-[1px] blist-gray-500 rounded-[4px] " type="text" placeholder="Description" />
                    </div>
                    {/* year */}
                    <div className="w-full lg:w-[30%] md:w-[46%] flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-gray " >Year</label>
                        <input onChange={handleChange} value={movieData.year} name='year' className="border-[1px] border-gray h-[20px] px-[12px] py-[20px] list-[1px] blist-gray-500 rounded-[4px] " type="number" placeholder="Year" />
                    </div>
                    {/* limit */}
                    <div className="w-full lg:w-[30%] md:w-[46%] flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-gray " >Limit</label>
                        <input onChange={handleChange} value={movieData.limit} name='limit' className="border-[1px] border-gray h-[20px] px-[12px] py-[20px] list-[1px] blist-gray-500 rounded-[4px] " type="number" placeholder="Limit" />
                    </div>
                    {/* isSeries */}
                    <div className="w-full lg:w-[30%] md:w-[46%] flex flex-col ">
                        <label className="mb-[10px] text-[16px] font-semibold text-gray " >Is Series</label>
                        <select multiple={false} onChange={handleChange} value={movieData.isSeries} className="newMovieSelect h-[40px] px-[12px] w-full rounded-[6px] list-[1px] blist-gray-500 " name="isSeries" id="active" >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    {/* genre */}
                    <div className="w-full lg:w-[30%] md:w-[46%] flex flex-col ">
                        <label className="mb-[10px] text-[16px] font-semibold text-gray " >genre</label>
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
                        <button onClick={handleCreateMovie} className="w-[200px] blist-none bg-darkBlue text-white px-[12px] py-[8px] rounded-[8px] font-semibold cursor-pointer mt-[32px] ">
                            {isFetching ? 'Loading...' : 'Create'}
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default NewMovie;