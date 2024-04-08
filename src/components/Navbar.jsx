import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Logo from '../Images/logoimg.png';

function Navbar({ isAuthenticated, setIsAuthenticated }) {

    const navigat = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigat("/login");
    }

    function OpenMenu(e) {
        let list = document.querySelector('ul');
        let computedStyle = window.getComputedStyle(list);
        let top = computedStyle.getPropertyValue('top');

        if (top === "-400px") {
            list.style.top = '60px'; // Show the menu
        } else {
            list.style.top = '-400px'; // Hide the menu
        }
    }

    return (
        <div className=' w-full flex justify-center items-center shadow-lg shadow-slat-500/40 mb-8 px-4 fixed top-0 left-0 backdrop-blur-xl bg-black/30 z-[111]'>
            <div className='w-full max-w-[1250px] flex justify-between py-[15px]'>
                <div className='text-white text-xl md:text-2xl font-medium flex gap-2 items-center'  style={{ 'font-family': '"Roboto", sans-serif', 'font-weight': '300' }}>
                    <img className='w-[30px] md:w-[40px]' src={Logo} alt="logo" />
                    <Link to="/" >
                        FRONTEND STUDIOS
                    </Link>
                </div>

                <div>
                    <div className='md:hidden block cursor-pointer text-xl'>
                        <i onClick={OpenMenu} class="ri-menu-4-line"></i>
                    </div>
                    <ul className='gap-1 flex flex-col md:flex-row absolute md:static left-0 h-[160px] md:h-0 md:mt-4 md:w-auto  z-[-1] md:pt-0 md:items-center  pt-4  w-full px-4  top-[-400px] transition-all ease-in duration-500 backdrop-blur-sm bg-black/90'>
                        <li onClick={OpenMenu} className='my-2 md:mx-4 flex gap-2 hover:text-white font-medium duration-300'>
                        
                            <NavLink to="/"><i class="ri-home-4-line"></i> Home</NavLink>
                        </li>

                        {isAuthenticated ? (
                            <>
                                <li onClick={OpenMenu} className='my-2 md:mx-4 hover:text-white font-medium duration-300'>
                                    <NavLink to="/add-project" className='flex gap-2'>
                                        <i class="ri-file-add-line"></i>
                                        Add Project</NavLink>
                                </li>
                                <li onClick={OpenMenu} className='my-2 md:mx-4 hover:text-white font-medium duration-300'>
                                    <button onClick={handleLogout} className='flex gap-2'>
                                        <i class="ri-logout-box-line"></i>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li onClick={OpenMenu} className='my-2 md:mx-4 hover:text-white font-medium duration-300'>
                                <button className='flex gap-2'>
                                   
                                    <NavLink to="/login" > <i class="ri-login-box-line"></i> Login</NavLink>
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
