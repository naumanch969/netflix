import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, BrokenImage } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getMovies, deleteMovie } from '../redux/actions/movie'
import { format } from 'timeago.js';

const Movies = ({ }) => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const { movies } = useSelector(state => state.movie)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //////////////////////////////////////// States ////////////////////////////////////////

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
    useEffect(() => {
        dispatch(getMovies())
    }, [])


    //////////////////////////////////////// Functions ////////////////////////////////////////
    const handleDelete = (id) => {
        dispatch(deleteMovie(id))
        navigate('/movies')
    }




    const movieColumns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {
            field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) => (
                <div className='flex items-center gap-[12px] ' >
                    {params.row.thumbnail ? <img src={params.row.thumbnail} alt='' className='w-[40px] h-[40px] rounded-full object-cover ' /> : <BrokenImage />}
                    <span className=' ' > {params.row.title}</span>
                </div>)
        },
        { field: 'inStock', headerName: 'Stock', width: 200 },
        { field: 'price', headerName: 'Price', width: 150, },
        {
            field: 'createdAt', headerName: 'Price', width: 150, renderCell: (params) => (
                <>{format(params.row.createdAt)}</>
            )
        },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => (
                <>
                    <Link to={`/movie/${params.row._id}`} >
                        <button className='blist-none rounded-[8px] py-[4px] px-[10px] bg-green text-white cursor-pointer mr-[20px] ' >Edit</button>
                    </Link>
                    <IconButton className='' onClick={() => handleDelete(params.row._id)} > <DeleteOutline style={{ color: 'red', cursor: 'pointer' }} /></IconButton>
                </>
            )
        },
    ]

    return (

        <div className='w-full md:flex-[4] h-full overflow-y-scroll ' >
            <div className="px-[2rem] pt-[12px] pb-[2rem] flex flex-col gap-[1rem] ">

                {/* title */}
                <div className="flex items-center justify-between ">
                    <h1 className="font-bold text-[32px]  ">Movies</h1>
                    <Link to='/newMovie' >
                        <button className="blist-none py-[4px] px-[1rem] bg-darkBlue rounded-[4px] cursor-pointer text-white text-[16px]  ">Create</button>
                    </Link>
                </div>

                <div className="lg:w-[60rem] overflow-x-scroll " >
                    <DataGrid
                        rows={movies}
                        columns={movieColumns}
                        initialState={{
                            pagination: { paginationModel: { page: movies.length % 10 , pageSize: 10 }, },
                        }}
                        getRowId={row => row._id}
                        checkboxSelection
                        pageSizeOptions={[5, 10]}
                        disableSelectionOnClick={true}
                    />
                </div>


            </div>
        </div>
    )
}

export default Movies