import React, { useEffect, useState } from 'react';
import { useLoader } from '../context/LoaderContext';

const Loader = () => {
  const { loaderImage, hideLoader } = useLoader();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1100);

    const timer = setTimeout(() => {
      hideLoader();
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`h-screen w-full fixed z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'} overflow-hidden`}>
      <div className='absolute bg-black/50 h-screen w-full'></div>
      <img src={loaderImage} loading='lazy' alt="loader" className='object-cover h-screen w-full' />
    </div>
  );
};

export default Loader;
