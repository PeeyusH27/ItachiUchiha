import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLoader } from '../context/LoaderContext'
import { motion } from 'framer-motion'
import data from '../../assets/info'
import '../index.css'

import transition from '../../assets/transition.gif'
import child from '../../assets/childhoodtr.gif'
import flames from '../../assets/amaterasuflame.gif'
import akatsuki from '../../assets/akatsukitransition.gif'

const Story = () => {
    const { id } = useParams()
    const { showLoader } = useLoader()

    const loaderMap = {
        childhood: child,
        akatsuki: akatsuki,
        finaltruth: flames,
    }

    useEffect(() => {
        const selectedLoader = loaderMap[id] || transition
        showLoader(selectedLoader)
    }, [id])

    const chapter = data.find((chapter) => chapter.link === id)
    const currentIndex = data.findIndex((chapter) => chapter.link === id);
    const nextChapter = data[currentIndex + 1];
    const prevChapter = data[currentIndex - 1];

    if (!chapter) {
        return (
            <div className="text-white text-2xl text-center mt-10">
                Chapter not found!
            </div>
        )
    }

    return (
        <div className="min-h-screen min-w-full bg-zinc-900 text-white flex flex-col">
            <h1 className="text-4xl md:text-5xl text-center mt-10 uppercase tracking-wider font-naruto">
                {chapter.title}
            </h1>

            <div className="w-full h-[55vh] mt-6 shadow-sm shadow-white">
                <img
                    src={chapter.thubnail}
                    alt={chapter.title}
                    className="w-full h-full object-cover"
                    loading='lazy'
                />
            </div>


            <div className='flex justify-around p-4 gap-2'>
                {currentIndex > 0 ? (
                    <Link to={`/chapters/${prevChapter.link}`}>
                        <button className="bg-red-800 hover:bg-red-700 line-clamp-2 md:line-clamp-none text-white font-semibold py-1 md:py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer">
                            Previous Chapter: {prevChapter.title}
                        </button>
                    </Link>
                ) : (
                    null
                )
                }

                <Link to={'/chapters'}>
                    <button className="bg-red-800 hover:bg-red-700 line-clamp-2 md:line-clamp-none text-white font-semibold py-1 md:py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer">
                        All Chapters
                    </button>
                </Link>

                {currentIndex < data.length - 1 ? (
                    <Link to={`/chapters/${nextChapter.link}`}>
                        <button className="bg-red-800 hover:bg-red-700 line-clamp-2 md:line-clamp-none text-white font-semibold py-1 md:py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer">
                            Next Chapter: {nextChapter.title}
                        </button>
                    </Link>
                ) : (
                    null
                )
                }
            </div>
            {/* LEFT */}
            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto mt-10 gap-8 px-6">
                <motion.img
                    src={chapter.images[0]}
                    alt="Visual 1"
                    loading='lazy'
                    className="w-full md:w-1/2 h-auto object-cover rounded-xl shadow-md"
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                />
                <motion.div
                    className="space-y-6 text-lg md:text-lg leading-relaxed"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                >
                    <p>{chapter.description[0]}</p>
                    <p>{chapter.description[1]}</p>
                </motion.div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto mt-12 gap-8 px-6 mb-16">
                <motion.div
                    className="space-y-6 text-lg md:text-lg leading-relaxed"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                // viewport={{ once: true, amount: 0.3 }}
                >
                    <p>{chapter.description[2]}</p>
                    <p>{chapter.description[3]}</p>
                </motion.div>
                <motion.img
                    src={chapter.images[1]}
                    alt="Visual 2"
                    loading='lazy'
                    className="w-full md:w-1/2 h-auto object-cover rounded-xl shadow-md"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                />
            </div>
            <div className='mx-auto px-2 py-6 animate-bounce'>
                {currentIndex == data.length - 1 ? (
                    <Link to={`/`}>
                        <button className="bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer font-naruto">
                            The End
                        </button>
                    </Link>
                ) : (
                    null
                )
                }
            </div>
        </div >
    )
}

export default Story
