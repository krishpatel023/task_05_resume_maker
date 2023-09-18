import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function ResumeSkills() {
  const {inputData} = useContext(GlobalContext)
  return (
    <div className='w-full mt-2'>
      <h1 className='font-semibold text-lg'>Skills</h1>
      <div className='w-full flex flex-wrap'>
        {
          inputData?
          inputData[1].data.map((data)=>
            <div className=' h-4 flex items-center p-2 gap-4' key={data.id}>
                <h1 className='text-xs'>{data.value}</h1>
            </div>          
          )
          :
          null
        }
      </div>
    </div>
  )
}
