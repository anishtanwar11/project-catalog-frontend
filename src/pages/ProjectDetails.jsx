// ProjectDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function ProjectDetails() {
  const { userId } = useParams(); // Get the projectId from URL params
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchProjectDetails() {
      try {
        const response = await Axios.get("https://project-catalouge-backend.vercel.app/project/" + userId);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    }

    fetchProjectDetails();
  }, [userId]); // Dependency on projectId to fetch project details when it changes

  return (
    <div>
      {project && (
        <div className='flex justify-center w-full mt-20 md:mt-32 px-4 mb-10 mg:mb-0'>
          <div className='flex flex-col lg:flex-row gap-8 p-6 md:p-8 w-full max-w-[1250px] border-[1px] border-opacity-20 rounded-xl border-slate-300 bg-[#14181A]'>
            <div className='flex lg:w-1/2 rounded-xl overflow-hidden justify-center items-center bg-[#94a3b8] md:p-4'>
              <img src={project.imageUrl} alt="Project Image" className='max-w-[530px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' />
            </div>
            <div className='lg:w-1/2 flex flex-col gap-4'>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  <h2 className='text-white text-2xl uppercase tracking-wider font-medium'>{project.name}</h2>
                  <div className='text-[#f59e0b]'>
                    <i class="ri-star-s-fill"></i>
                  </div>
                </div>
                <p className='border-[1px] border-opacity-20 rounded-[20px] border-slate-300 py-2 px-8'>{project.category}</p>
              </div>
              <div>
                <p className='text-[15px] font-medium'>Technologies</p>
                <p className='text-[1rem] text-slate-400 font-normal text-justify mt-2'>{project.techStack}</p>
              </div>
              <div>
                <p className='text-[15px] font-medium'>Description</p>
                <p className='text-[1rem] text-slate-400 font-normal text-justify mt-2'>{project.description}</p>
              </div>
              <div className='flex gap-4 mt-4'>
                <a
                  href={project.liveLink}
                  target='_blank'
                  className='hover:bg-slate-300 duration-500 text-[15px] md:text-[18px] font-semibold gap-2 flex shadow-lg bg-white text-black px-4 md:px-8 py-2 rounded-lg' rel="noreferrer" >
                  <i class="ri-links-line"></i> Live Link
                </a>
                <a
                  href={project.sourceCodeLink}
                  target='_blank'
                  className='hover:bg-slate-300 duration-500 text-[15px] md:text-[18px] font-semibold gap-2 flex shadow-lg bg-white text-black px-4 md:px-8 py-2 rounded-lg' rel="noreferrer" >
                  <i class="ri-github-fill"></i> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
