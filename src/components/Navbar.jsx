import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const goToUpload = () => {
    navigate('/upload');
  };
  return (
    <div>
      <nav className='bg-yellow-200 border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            VTube
          </span>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <div className='flex'>
              <button
                type='button'
                onClick={goToUpload}
                className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2'
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
