import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectTabs() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://project-catalouge-backend.vercel.app/category");
                setCategories(response.data);
                const storedActiveCategory = localStorage.getItem('activeCategory');
                if (storedActiveCategory && response.data.find(category => category.category === storedActiveCategory)) {
                    setActiveCategory(storedActiveCategory);
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        localStorage.setItem('activeCategory', category);
    };

    return (
        <div className='flex items-center w-full justify-center mb-10 px-4'>
            <ul className='flex items-cente justify-center w-full gap-4  flex-wrap'>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={`border-[1px] border-opacity-20 rounded-xl border-slate-300 hover:text-white font-medium duration-200
                         ${ activeCategory === category.category ? 'bg-[#14181A] text-white' : ''}`}>
                        <Link
                            to={`/category/${category.category}`}
                            className='text-[13px] md:text-[17px] py-2 px-4 w-[80px] md:w-[100px] justify-center items-start flex'
                            onClick={() => handleCategoryClick(category.category)}
                        >
                            <a href={`https://project-catalouge-backend.vercel.app/project/category/${category.category}`}>
                                {category.category}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectTabs;
