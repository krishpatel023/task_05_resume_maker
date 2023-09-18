import React from 'react'
import ResumeName from './ResumeName'
import ResumeExperience from './ResumeExperience'
import ResumeEducation from './ResumeEducation'
import ResumeSkills from './ResumeSkills'

export default function Resume1Layout() {
  return (

    <div className='w-[90%] h-[90%]'>
        <div className='mt-6'></div>
        <ResumeName/>
        <div className='w-full min-h-[1px] mt-2 mb-2 bg-black'></div>
        <ResumeSkills/>
        <div className='w-full min-h-[0.5px] mt-2 mb-2 bg-black'></div>
        <ResumeExperience/>
        <div className='w-full min-h-[1px] mt-2 mb-2 bg-black'></div>
        <ResumeEducation/>
    </div>
  )
}
