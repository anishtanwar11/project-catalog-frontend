import React, { useState } from 'react'
import Axios from 'axios';
import Footer from '../components/Footer'
import { toast } from 'react-toastify';

function Project() {
    const [category, setCategory] = useState('');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value.toLowerCase());
    }

    const handleCategory = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post("https://legit-geese-production.up.railway.app/category", { category });
            console.log(response.data);
            setCategory('');
            toast.success("category created");
        } catch (error) {
            console.log("Error in creating the project category : ", error);
            toast.error("Failed to create!");
        }
    }

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        techStack: '',
        category: '',
        liveLink: '',
        sourceCodeLink: '',
        imageUrl: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            imageUrl: file
        }));
    };

    // Axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('techStack', formData.techStack);
            formDataToSend.append('category', formData.category);
            formDataToSend.append('liveLink', formData.liveLink);
            formDataToSend.append('sourceCodeLink', formData.sourceCodeLink);
            formDataToSend.append('imageUrl', formData.imageUrl);

            const response = await Axios.post("https://legit-geese-production.up.railway.app/project/add", formDataToSend);
            console.log(response.data);

            setFormData({
                name: '',
                description: '',
                techStack: '',
                category: '',
                liveLink: '',
                sourceCodeLink: '',
                imageUrl: ''
            });
            toast.success("Successfully added new project!");
        } catch (error) {
            console.error("Error adding new project", error);
            toast.error("Failed to create!");
        }
    }

    return (
        <div className='flex justify-center w-full mt-20 md:mt-32'>
            <div className='w-full max-w-[1250px]'>
            <div className=' flex flex-col md:flex-row w-full  justify-between gap-8 px-4 lg:px-0' >
                <form onSubmit={handleSubmit} encType="multipart/form-data" className='px-4 py-8 lg:p-8 md:w-1/2 shadow-lg shadow-slat-500/40 border-[1px] border-slate-300 border-opacity-20 bg-[#14181A] rounded-[15px]'>
                    <div className='flex gap-2 text-white justify-center mb-2'>
                        <i class="ri-folder-add-fill"></i>
                        <h1 className=' font-normal text-[1rem] mb-2'>Add new project </h1>
                    </div>

                    <label className='text-[15px] font-light'>Title</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className='bg-black mt-1 w-full outline-none px-4 py-2 rounded-[5px] mb-2 border-[1px] border-slate-300 border-opacity-20'
                    />
                    <br />

                    <label className='text-[15px] font-light'>Description</label>
                    <textarea
                        type="text"
                        name="description"
                        required
                        rows="4" cols="50"
                        value={formData.description}
                        onChange={handleChange}
                        className='bg-black mt-1 w-full outline-none px-4 py-2 rounded-[5px] mb-2 border-[1px] border-slate-300 border-opacity-20'
                    />
                    <br />

                    <label className='text-[15px] font-light'>Technologies</label>
                    <input
                        type="text"
                        name="techStack"
                        required
                        value={formData.techStack}
                        onChange={handleChange}
                        className='bg-black mt-1 w-full outline-none px-4 py-2 rounded-[5px] mb-2 border-[1px] border-slate-300 border-opacity-20'
                    />
                    <br />

                    <label className='text-[15px] font-light'>Category</label>
                    <input
                        type="text"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className='bg-black mt-1 w-full outline-none px-4 py-2 rounded-[5px] mb-2 border-[1px] border-slate-300 border-opacity-20'
                    />
                    <br />

                    <label className='text-[15px] font-light'>Live Link</label>
                    <input
                        type="text"
                        name="liveLink"
                        required
                        value={formData.liveLink}
                        onChange={handleChange}
                        className='bg-black mt-1 w-full outline-none px-4 py-2 rounded-[5px] mb-2 border-[1px] border-slate-300 border-opacity-20'
                    />
                    <br />

                    <label className='text-[15px] font-light'>Source Code</label>
                    <input
                        type="text"
                        name="sourceCodeLink"
                        required
                        value={formData.sourceCodeLink}
                        onChange={handleChange}
                        className='bg-black mt-1 w-full outline-none px-4 py-2 rounded-[5px] mb-2 border-[1px] border-slate-300 border-opacity-20'
                    />
                    <br />
                    <input
                        type="file"
                        name="imageUrl"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-slate-500 mt-2
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-black
                    hover:file:bg-violet-100"
                    />
                    <br />
                    <button type='submit' className='hover:bg-slate-300 duration-500 md:text-[18px] font-semibold text-black bg-white w-full px-8 py-2 rounded-[5px]'>Upload</button>
                </form>

                <form onSubmit={handleCategory} className='px-4 py-8 lg:p-8  md:w-1/2 shadow-lg shadow-slat-500/40 h-[230px] border-[1px] border-slate-300 border-opacity-20 bg-[#14181A] rounded-[15px]'>

                    <div className='flex gap-2 text-white justify-center mb-2'>
                        <i class="ri-sticky-note-add-fill"></i>
                        <h1 className=' font-normal text-[1rem] mb-2'>Add new category</h1>
                    </div>

                    <label className='text-[15px] font-light'>Category</label>
                    <input
                        type="text"
                        name="category"
                        id='category'
                        required
                        value={category}
                        onChange={handleCategoryChange}
                        className='bg-black mt-1 w-full outline-none px-4 py-2 rounded-[5px] mb-2 border-[1px] border-slate-300 border-opacity-20'
                    />

                    <button type='submit' className='mt-4 hover:bg-slate-300 duration-500 md:text-[18px] font-semibold text-black bg-white w-full px-8 py-2 rounded-[5px]'>Add Category</button>
                </form>
            </div>
            <Footer />
           </div>
        </div>
        
    )
}

export default Project
