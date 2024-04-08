import React from 'react'
import ProjectTabs from '../components/ProjectTabs';
import ProjectDisplay from '../components/ProjectDisplay';
import Footer from '../components/Footer';
function Home() {
  return (
    <div className="flex w-full justify-center mt-20 md:mt-32">
      <div className='w-fullflex flex-col items-center justify-between gap-8'>
        <div className=''>
          <ProjectTabs />
        </div>
        <div className=''>
          <ProjectDisplay />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
