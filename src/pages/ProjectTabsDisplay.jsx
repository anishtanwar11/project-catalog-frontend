import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom'; // Import Link for navigation
import ProjectTabs from '../components/ProjectTabs';
import Footer from '../components/Footer';

function ProjectTabsDisplay() {
  const { category } = useParams(); // Get category from URL params
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await Axios.get(`https://legit-geese-production.up.railway.app/project/category/${category}`); // Use backticks for string interpolation
        const formattedProjects = response.data.map(project => ({
          ...project,
          imageUrl: project.imageUrl.replace(/\\/g, '/'), // Convert backslashes to forward slashes
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, [category]); // Fetch projects whenever category changes

  return (
    <div className='w-full justify-center flex mt-32'>
      <div className='w-full max-w-[1250px] flex flex-col gap-8'>
      <div className=''>
          <ProjectTabs />
        </div>
        <div className='w-full justify-center flex md:max-w-[1250px] px-4 md:px-4 lg:px-0'>
          <div className='w-full'>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map(project => (
            <li key={project.name} className='border-[1px] border-slate-300 border-opacity-20 bg-[#14181A] p-2 rounded-[15px]'>
              {/* Link to Details Page */}
              <Link to={`/project/${project._id}`}>
                <div className='rounded-[15px] overflow-hidden h-[200px] object-cover'>
                  <img src={project.imageUrl} alt="Project Image" className='w-full object-fill' />
                </div>

                <div className='p-4 flex flex-col gap-4'>
                  <div className='flex items-center gap-2 text-xl font-medium'>
                    <h1 className='text-white'>{project.name}</h1>
                    <div className='text-[#f59e0b]'>
                      <i class="ri-star-s-fill"></i>
                    </div>
                  </div>
                  <p className='text-[15px] font-normal text-justify'>{project.description}</p>
                </div>

              </Link>
            </li>
          ))}
        </ul>
        </div>
        </div>
       
        <Footer />
      </div>
    </div>
  );
}

export default ProjectTabsDisplay;
