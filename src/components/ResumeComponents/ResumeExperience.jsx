import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function ResumeExperience() {

    const {inputData} = useContext(GlobalContext)
  return (
    <div className='w-full mt-2'>
        <h1 className='text-lg font-semibold'>Experience</h1>
        {
            inputData?
            inputData[3].data.map((data,i)=>
                <div className='w-full mt-2' key={i}>
                    <div className='w-full flex justify-between'>
                        <h1 className='text-sm font-semibold'>{data.companyName}</h1>
                        <h2 className='text-xs font-semibold' >{data.startDate} - {data.endDate}</h2>
                    </div>
                    <h1 className='text-xs font-medium'>{data.jobTitle}</h1>
                    <h1 className='text-xs ml-2' >{data.description}</h1>
                </div>            
            )
            :null
        }

    </div>
  )
}
