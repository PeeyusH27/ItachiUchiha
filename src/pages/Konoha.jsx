import React, { useEffect } from 'react'
import itacchianbu from '../../assets/itachilife.jpg'
import { motion } from 'framer-motion'
import '../index.css'
import { Link } from 'react-router'
import { useLoader } from '../context/LoaderContext'
import crows from '../../assets/crows.gif'

const container = {
    initial: { opacity: 0.5, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut',
            staggerChildren: 0.2,
        }
    }
}

const child = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
}

const Konoha = () => {
    const { showLoader } = useLoader();
    useEffect(() => {
        showLoader(crows);
    }, []);

    return (
        <motion.div className='min-h-screen w-full overflow-hidden relative'>
            <img src={itacchianbu} loading='lazy' alt="" className='object-cover h-screen w-full' />
            <div
                className='absolute top-0 h-screen w-full flex justify-center items-center bg-black/60'
            >
                <motion.div
                    variants={container}
                    initial='initial'
                    animate='animate'
                    viewport={{ once: true, amount: 0.3 }}
                    className='flex flex-col gap-4 items-center justify-center p-10'>
                    <motion.h1 variants={child} className='text-5xl md:text-7xl lg:text-9xl font-bold outlined-text font-ninja'>THE LIFE</motion.h1>
                    <motion.h1 variants={child} className='text-2xl md:text-4xl lg:text-5xl font-semibold outlined-text font-ninja'>OF</motion.h1>
                    <motion.h1 variants={child} className='text-5xl md:text-7xl lg:text-9xl font-bold  outlined-head font-ninja tracking-wide'>ITACHI UCHIHA</motion.h1>
                </motion.div>
                <div className='absolute bottom-10 flex flex-col gap-4 w-full justify-center items-center'>
                    <Link to={'/chapters'}>
                        <button className='bg-red-900 cursor-pointer text-white rounded-lg py-4 px-6 animate-bounce font-naruto'>Let's Start</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Konoha