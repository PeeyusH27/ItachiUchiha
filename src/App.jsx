// App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoaderProvider, useLoader } from './context/LoaderContext.jsx';
import Loader from './components/Loader';
import Konoha from './pages/Konoha';
import Chapter1 from './pages/Chapter1';
import Story from './pages/Story.jsx';
import Footer from './components/Footer.jsx';

const AppContent = () => {
  const { splash } = useLoader();

  return (
    <div className='bg-zinc-800 min-h-screen overflow-hidden'>
      {splash && <Loader />}
      <Router>
        <Suspense fallback={<div className='bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 animate-pulse h-screen w-full'></div>}>
          <Routes>
            <Route path='/' element={<Konoha />} />
            <Route path='/chapters' element={<Chapter1 />} />
            <Route path='/chapters/:id' element={<Story />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
};

const App = () => (
  <LoaderProvider>
    <AppContent />
  </LoaderProvider>
);

export default App;
