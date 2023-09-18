import React from 'react'
import PromptComponent from '../components/PromptComponents/PromptComponent'
import ResumeDisplayComponent from '../components/ResumeComponents/ResumeDisplayComponent'

export default function ResumeHome() {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-secondary-color'>
        <div className='w-[85%] h-[90%] bg-primary-color rounded-lg flex justify-center items-center'>
            <div className='w-[90%] h-[90%]'>
                <PromptComponent/>
            </div>
            <div className='w-[90%] h-[100%] flex flex-col justify-center items-center'>
                <ResumeDisplayComponent/>
            </div>
        </div>
      </div>
    </>
  )
}
