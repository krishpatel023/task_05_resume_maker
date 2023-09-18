import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function ResumeEducation() {

    const {inputData} = useContext(GlobalContext)
  return (
    <div className='w-full mt-2'>
        <h1 className='text-lg font-semibold'>Education</h1>
        {
            inputData?
            inputData[2].data.map((data,i)=>
                <div className='w-full mt-2' key={i}>
                    <div className='w-full flex justify-between'>
                        <h1 className='text-sm font-semibold'>{data.qualification}</h1>
                        <h2 className='text-xs font-semibold' >{data.startDate} - {data.endDate}</h2>
                    </div>
                    <h1 className='text-xs font-medium'>{data.instituteName}</h1>
                    <h1 className='text-xs' >{data.description}</h1>
                </div>            
            )
            :null
        }

    </div>
  )
}
