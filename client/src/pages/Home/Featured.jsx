import { useDispatch, useSelector } from 'react-redux'
import { background } from '../../assets'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { getRandomMovie } from '../../redux/actions/movie'
import { Link } from 'react-router-dom'

const Featured = ({ type }) => {

    const { featuredMovie: movie } = useSelector(state => state.movie)
    const dispatch = useDispatch()
    const [genre, setGenre] = useState('action')
    console.log('feature', movie)

    const options = [
        { value: 'genre', option: 'Genre' },
        { value: 'adventure', option: 'Adventure' },
        { value: 'comedy', option: 'Comedy' },
        { value: 'fantasy', option: 'Fantasy' },
        { value: 'historical', option: 'Historical' },
        { value: 'horror', option: 'Horror' },
        { value: 'romance', option: 'Romance' },
        { value: 'sci-fi', option: 'Sci-Fi' },
        { value: 'thriller', option: 'Thriller' },
        { value: 'western', option: 'Western' },
        { value: 'animation', option: 'Animation' },
        { value: 'drama', option: 'Drama' },
        { value: 'documentary', option: 'Documentary' },
    ]

    useEffect(() => {
        dispatch(getRandomMovie({ type, genre }))
    }, [type, genre])
    useEffect(() => {
        console.log(movie)
    }, [])

    return (
        <div className='h-[90vh] relative ' >

            {
                type &&
                <div className="category absolute top-[80px] left-[50px] text-white flex items-center ">
                    <span className='text-[36px] font-medium ' >{type == 'movie' ? 'Movies' : 'Series'}</span>
                    <select name="genre" id="genre" className='w-[7rem] text-[14px] rounded-[2px] outline-none cursor-pointer bg-main-color blist-[1px] blist-white text-white ml-[20px] p-[5px] ' >
                        <option onChange={(e) => setGenre(e.target.value)} value={genre} >Genre</option>
                        {
                            options.map((option, index) => (
                                <option key={index} value={option.value} >{option.option}</option>
                            ))
                        }
                    </select>
                </div>
            }

            <img src={movie?.thumbnail || background} alt="" className='w-full h-full object-cover ' />

            <div className="info flex flex-col absolute left-[50px] bottom-[100px] text-white w-[45%] ">
                <h1 className='text-[5rem] ' >{movie?.title}</h1>
                <span className='my-[20px]  ' >{movie?.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur, culpa velit, beatae maxime rem magni illum, impedit qui architecto ipsum delectus distinctio. Laboriosam impedit hic beatae quia voluptate aliquid?'}</span>
                <div className="buttons flex gap-[1rem] ">
                    <Link to={{ pathname:'/watch', movie }} >
                        <button className="blist-none rounded-[5px] flex justify-center items-center gap-[6px] text-[18px] font-semibold cursor-pointer px-[8px] py-[4px] bg-white text-main-color "><PlayArrow /> <span  >Play</span></button>
                    </Link>
                    <button className="blist-none rounded-[5px] flex justify-center items-center gap-[6px] text-[18px] font-semibold cursor-pointer px-[8px] py-[4px] bg-gray-700 text-white "><InfoOutlined /><span  >Info</span> </button>
                </div>
            </div>

        </div>
    )
}

export default Featured