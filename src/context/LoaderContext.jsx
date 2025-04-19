// LoaderContext.js
import React, { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [splash, setSplash] = useState(false);
  const [loaderImage, setLoaderImage] = useState(null);

  const showLoader = (image) => {
    setLoaderImage(image);
    setSplash(true);
  };

  const hideLoader = () => {
    setSplash(false);
    setLoaderImage(null);
  };

  return (
    <LoaderContext.Provider value={{ splash, loaderImage, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
