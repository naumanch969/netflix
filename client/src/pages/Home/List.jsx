import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from './ListItem'
import { useRef, useState } from 'react'


const List = ({ list }) => {
    console.log('list',list)

    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientReact().x - 50
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        else if (direction === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
    }


    return (
        <div className="w-full mt-[10px]   " >

            <span className='text-[20px] text-white font-medium ' >{list?.title}</span>
            <div className="relative ">
                <ArrowBackIosOutlined
                    style={{ height: '100%', width: '40px' }}
                    onClick={() => handleClick('left')} className={`${!isMoved && 'hidden'} w-[3rem] h-full bg-black opacity-50 text-white absolute left-0 top-0 bottom-0 m-auto z-[500] cursor-pointer `}
                />
                <div ref={listRef} className="ml-[50px] flex w-max transform translate-x-0 transition-all ">
                    {
                        list?.content.map((movieId, index) => (
                            <ListItem movieId={movieId} index={index} key={index} />
                        ))
                    }
                </div>
                <ArrowForwardIosOutlined
                    style={{ height: '100%', width: '40px' }}
                    onClick={() => handleClick('right')} className='w-[3rem] h-full bg-black opacity-50 text-white absolute right-0 top-0 bottom-0 m-auto z-[500] cursor-pointer '
                />
            </div>

        </div>
    )
}

export default List