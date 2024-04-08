import React from 'react'
import BgImage from '../Images/pattern-grid.svg';

function Footer() {
    return (
        <div className='border-[1px] border-opacity-20 rounded-xl border-slate-300 my-16 relative overflow-hidden mx-4 lg:mx-0'>
            <div className='absolute top-0 left-0 z-[-1]'>
                <img src={BgImage} alt="bgImage" />
            </div>
            <div className='bg-[#14181A]/95 p-8 flex flex-col items-center gap-4'>
                <h1 className='text-white text-xl md:text-2xl mb-4 text-center' style={{ 'font-family': '"Roboto", sans-serif', 'font-weight': '300' }}>Website by Anish Tanwar</h1>

                <div className='flex flex-col md:flex-row gap-4 lg:gap-0 justify-between w-full items-center'>
                    <a href='https://anishtanwar.netlify.app/' target='_blanck' className='hover:bg-slate-300 duration-500 bg-white text-black text-[18px] font-[600] px-12 md:px-16 py-2 rounded-lg'>
                        <i class="ri-global-line"></i> Portfolio
                    </a>
                    <ul className='flex gap-8 text-2xl '>
                        <li className='hover:text-white duration-500'>
                            <a href="https://www.linkedin.com/in/thisisanishtanwar/" target='_blanck'>
                                <i class="ri-linkedin-box-fill"></i>
                            </a>
                        </li>
                        <li className='hover:text-white duration-500' target='_blanck'>
                            <a href="https://github.com/anishtanwar11">
                                <i class="ri-github-fill"></i>
                            </a>
                        </li>

                        <li className='hover:text-white duration-500' target='_blanck'>
                            <a href="https://twitter.com/thisistanwar">
                                <i class="ri-twitter-x-line"></i>
                            </a>
                        </li>
                        <li className='hover:text-white duration-500' target='_blanck'>
                            <a href="https://anishtanwar.netlify.app/">
                                <i class="ri-instagram-fill"></i>
                            </a>
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    )
}

export default Footer
