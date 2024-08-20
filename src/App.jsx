import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import VTubeHome from './pages/VTubeHome';
import UploadForm from './pages/UploadForm';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<VTubeHome />} />
        <Route path='/upload' element={<UploadForm />} />
      </Routes>
    </>
  );
}

export default App;
