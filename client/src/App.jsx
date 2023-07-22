import { useSelector } from 'react-redux';
import { Home, Register, Login, Watch } from './pages'
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {

  const { loggedUser: user } = useSelector(state => state.user)

  return (
    <div className='bg-main-color min-h-screen w-screen ' >
      <Routes>
        <Route path='/' exact element={user ? <Home /> : <Navigate to='/auth/register' />} />
        <Route path='/movies' element={user ? <Home type='movies' /> : <Navigate to='/auth/register' />} />
        <Route path='/series' element={user ? <Home type='series' /> : <Navigate to='/auth/register' />} />
        <Route path='/watch' element={user ? <Watch /> : <Navigate to='/auth/register' />} />
        <Route path='/auth/register' element={!user ? <Register /> : <Navigate to='/' />} />
        <Route path='/auth/login' element={!user ? <Login /> : <Navigate to='/' />} />
      </Routes>
    </div>
  )
}
export default App;