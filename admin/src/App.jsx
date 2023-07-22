import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { Home, Users, User, NewUser, Movies, Movie, NewMovie, Login, Register, ToBeCreated, NewList, List, Lists } from './pages'
import { AppWrapper } from './wrapper'
import { useSelector } from 'react-redux'

const App = () => {

  const { loggedUser } = useSelector(state => state.user)



  return (
    <div className='w-screen h-screen overflow-hidden ' >

      <Routes>
        <Route path='/login' element={loggedUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/register' element={loggedUser ? <Navigate to='/' /> : <Register />} />
      </Routes>
      {
        loggedUser?.isAdmin
          ?
          <Routes>
            <Route path='/' exact element={<AppWrapper Component={Home} />} />
            <Route path='/home' element={<Navigate to='/' />} />
            <Route path='/users' element={<AppWrapper Component={Users} />} />
            <Route path='/user/:id' element={<AppWrapper Component={User} />} />
            <Route path='/newUser' element={<AppWrapper Component={NewUser} />} />
            <Route path='/movies' element={<AppWrapper Component={Movies} />} />
            <Route path='/movie/:id' element={<AppWrapper Component={Movie} />} />
            <Route path='/newMovie' element={<AppWrapper Component={NewMovie} />} />
            <Route path='/lists' element={<AppWrapper Component={Lists} />} />
            <Route path='/list/:id' element={<AppWrapper Component={List} />} />
            <Route path='/newList' element={<AppWrapper Component={NewList} />} />
            
            <Route path='/analytics' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/sales' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/transactions' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/reports' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/mail' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/feedback' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/messages' element={<AppWrapper Component={ToBeCreated} />} />
            <Route path='/manage' element={<AppWrapper Component={ToBeCreated} />} />
          </Routes>
          :
          <div className='bg-lightBlue flex flex-col gap-[1rem] justify-center items-center w-screen h-screen ' >
            <span className='text-[32px] font-semibold ' >Only admin can access this page</span>
            <Link to='/login' className='text-[18px] bg-teal text-white px-[1rem] py-[8px] rounded-[4px] ' >Login</Link>
            <Link to='/' className='underline text-[18px] ' >Go Back</Link>
          </div>

      }
    </div>
  )
}

export default App;