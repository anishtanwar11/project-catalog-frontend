import React, { useState } from 'react'
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login({ setIsAuthenticated }) {

    const [showPassword, setShowPassword] = useState(false);

    const passwordToggle = () => {
        setShowPassword(!showPassword);
    }

    const toggle = () => {
        setIsAuthenticated(true);
        console.log("Logged In");
    }

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post("https://legit-geese-production.up.railway.app/auth/login", formData);
            console.log(response.data);
            toggle();
            setFormData({
                username: '',
                password: ''
            })
            toast.success("Login Successfully...")
            navigate('/')
        } catch (error) {
            console.log("Error Login user", error);
            toast.error("Only admin can login...")
        }
    }

    return (
        <div className='flex justify-center w-full mt-32'>
            <div className='w-full max-w-[1250px] gap-8 justify-center flex px-4 lg:px-0' >
                <form onSubmit={handelSubmit} className='px-4 py-8 md:p-8 shadow-lg shadow-slat-500/40 border-[1px] border-slate-300 border-opacity-20 bg-[#14181A] rounded-[15px]'>
                    <div className='flex flex-col items-center mb-4'>
                        <h1 className='text-2xl text-white font-semibold mb-2'>LOGIN</h1>
                        <p className=' font-normal text-[1rem] mb-2'>👋 Welcome back! Only admin have the login access!</p>
                    </div>

                    <div>
                        <label className='text-[15px] font-light '>Username</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            autoComplete='off'
                            required
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            className='bg-black mt-1 w-full outline-none px-4 py-2 rounded-[5px] mb-2 border-[1px] border-slate-300 border-opacity-20' />

                        <div className='relative'>
                        </div>
                        <div className='relative'>
                            <label className='text-[15px] font-light '>Password</label>
                            <input
                                type={(showPassword === false) ? 'password' : 'text'}
                                name='password'
                                id='password'
                                autoComplete='off'
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className='bg-black mt-1 w-full outline-none px-4 py-2 rounded-[5px] mb-2 border-[1px] border-slate-300 border-opacity-20 relative' />
                            <div className="absolute right-4 top-9 cursor-pointer text-white">
                                {
                                    (showPassword === false) ? <i onClick={passwordToggle} class="ri-eye-line"></i> : <i onClick={passwordToggle} class="ri-eye-off-line"></i>
                                }
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='hover:bg-slate-300 duration-500 bg-white mt-4 w-full text-black font-semibold px-8 py-2 rounded-lg'>Login</button>
                </form>
            </div>
        </div>
    )
}


export default Login

