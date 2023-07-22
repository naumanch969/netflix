import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
const FeaturedInfo = () => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const { incomeChange } = useSelector(state => state.list);
    const dispatch = useDispatch();
    const featuredArr = [
        { title: 'Revenue', money: '$2,522', change: incomeChange, subTitle: 'Compare to last month.', icon: incomeChange > 0 ? ArrowUpward : ArrowDownward, positive: incomeChange > 0 },
        { title: 'Sales', money: '$1,520', change: '-0.4', subTitle: 'Compare to last month.', icon: ArrowDownward },
        { title: 'Cost', money: '$522', change: '+3.9', subTitle: 'Compare to last month.', icon: ArrowUpward, positive: true },
    ]

    //////////////////////////////////////// States ////////////////////////////////////////

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
 

    //////////////////////////////////////// Functions ////////////////////////////////////////




    return (
        <div className="w-fit md:w-full flex flex-row flex-wrap md:justify-between justify-center gap-[24px] mt-[12px] " >
            {
                featuredArr.map((featuredMovie, index) => (
                    <div key={index} className="shadow-box w-full sm:w-fit md:flex-1 p-[32px] rounded-[8px] cursor-pointer ">
                        <span className="text-[20px] ">{featuredMovie.title}</span>
                        <div className="my-[10px] flex items-center gap-[20px] ">
                            <span className="text-[32px] font-bold ">{featuredMovie.money}</span>
                            <span className="flex items-center ">%{featuredMovie.change} <featuredMovie.icon style={{ fontSize: '14px', marginLeft: '4px', color: featuredMovie.positive ? 'green' : 'red' }} /> </span>
                        </div>
                        <span className="text-[1rem] text-gray-500 ">{featuredMovie.subTitle}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default FeaturedInfo