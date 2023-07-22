import { Navbar, Sidebar } from '../components'
import { useEffect, useState } from 'react'
import { rawMovies, rawUsers } from '../data/data'

const AppWrapper = ({ Component }) => {
    const [showSidebar, setShowSidebar] = useState(false)

    const [movies, setMovies] = useState(rawMovies)
    const [users, setUsers] = useState(rawUsers)

    useEffect(() => {
        window.innerWidth > 768 && setShowSidebar(true)
    }, [window.innerWidth])


    return (
        <>
            <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <div style={{ height: "calc(100vh - 4rem)" }} className='flex w-full ' >
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                <Component movies={movies} setMovies={setMovies} users={users} setUsers={setUsers} />
            </div>
        </>
    )
}

export default AppWrapper