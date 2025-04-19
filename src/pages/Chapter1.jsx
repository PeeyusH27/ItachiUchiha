import React from 'react'
import data from '../../assets/info'
import { Link } from 'react-router-dom'

const Chapter1 = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center p-10 bg-zinc-900'>
            <div className='grid grid-cols-2 justify-center items-center w-full md:w-[85%] lg:w-[75%] h-full gap-4'>
                {data && data.map((i, index) => (
                    <Link
                        to={`/chapters/${i.link}`}
                        className='relative bg-white overflow-hidden h-full w-full rounded-xl cursor-pointer outline-red-500 flex flex-col justify-center items-center gap-2 shadow-lg shadow-black'
                        key={index}
                    >
                        <img src={i.thubnail} loading='lazy' alt="" className='h-full w-full object-cover mask-b-from-75% md:mask-b-from-85% hover:opacity-95'/>
                        <h1 className='absolute bottom-0 text-md md:text-lg font-bold uppercase text-center w-full p-2 font-ninja tracking-widest'>{i.title}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Chapter1