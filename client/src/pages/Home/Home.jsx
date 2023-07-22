import { background } from '../../assets'
import { Navbar, Featured, List } from '../../components'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLists } from '../../redux/actions/list'
import Cookies from 'js-cookie'

const Home = ({ type }) => {

  const { lists, isFetching, error } = useSelector(state => state.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLists({ type }))
  }, [type])


  return (
    <div className='bg-main-color text-white overflow-x-hidden ' >

      <Navbar />
      <Featured type={type} />
      <div className='flex flex-col gap-[1rem] mt-[1rem] ' >
        {
          lists.map((list, index) => (
            <List list={list} key={index} />
          ))
        }
      </div>

    </div>
  )
}

export default Home