
import { person1, person2, person3 } from '../assets'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLists } from '../redux/actions/list'
import { format } from 'timeago.js'
import BasicTable from './Table'
import { rawLists as lists } from '../data/data'

const HomeLists = () => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const dispatch = useDispatch()
    // const { lists } = useSelector(state => state.list)

    //////////////////////////////////////// States ////////////////////////////////////////

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
    // useEffect(() => {
    //     dispatch(getLists({ new: true }))
    // }, [])

    //////////////////////////////////////// Functions ////////////////////////////////////////

    return (
        <div className='w-full md:w-auto md:flex-[2] p-[20px] shadow-box' >

            <span className='text-[24px] font-semibold' >Latest Transactions</span>

            <BasicTable
                data={lists}
                headRow={['customer', 'amount', 'status', 'date']}
                attributes={['user', 'amount', 'status', 'createdAt']}
            />

        </div>
    )
}

export default HomeLists;