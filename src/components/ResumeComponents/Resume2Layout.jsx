import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function Resume2Layout() {
    const {inputData} = useContext(GlobalContext)
  return (
    <div className='w-[100%] h-full flex'>
      <div className='w-[30%] h-full bg-[#323D49] text-accent-complementary flex flex-col items-end'>
        {/* Contact */}
        <div className='w-[90%] overflow-hidden'>
            <h1 className='text-lg font-semibold underline mt-6'>Contact</h1>
            <h3 className='text-base font-semibold mt-2'>Phone</h3>
            <h5 className='text-xs '>8000000</h5>

            <h3 className='text-base font-semibold mt-2'>Email</h3>
            <h5 className='text-xs '>krishpatel0234@gmail.com</h5>

            <h3 className='text-base font-semibold mt-2'>Address</h3>
            <h5 className='text-xs '>Ahmedabad</h5>
        </div>
        {/* Education */}
        <div className='w-[90%] overflow-hidden'>
        <h1 className='text-lg font-semibold underline mt-4'>Education</h1>
        {
            inputData?
            inputData[2].data.map((data,i)=>
                <div className='w-full mt-2' key={i}>
                    <h1 className='text-sm font-semibold'>{data.qualification}</h1>
                    <h1 className='text-xs font-medium'>{data.instituteName}</h1>
                    {/* <h2 className='text-xs font-semibold' >{data.endDate}</h2> */}
                </div>            
            )
            :null
        }
        </div>
        {/* Expertise */}
        <div className='w-[90%] overflow-hidden'>
        <h1 className='text-lg font-semibold underline mt-4'>Skills</h1>
        {
            inputData?
            inputData[1].data.map((data,i)=>
                <h1 className='text-sm' key={i}>{data.value}</h1>
            )
            :null
        }
        </div>
      </div>
      <div className='w-[70%] h-full flex flex-col items-center'>
        {/* Name */}
        <div className='w-[90%] h-[90%] mt-6'>
            <h1 className='text-2xl font-bold'>Krish Patel</h1>
            {/* Links */}
            {
            inputData[0].data[4].value !== '' &&
            <div className='text-xs flex items-center gap-2'><i className="fa-brands fa-linkedin"></i>{inputData[0].data[4].value}</div>
            }     
            {
            inputData[0].data[5].value !== '' &&
            <div className='text-xs flex items-center gap-2'><i className="fa-brands fa-github"></i>{inputData[0].data[5].value}</div>
            }
            {/* Experience */}    


            <h1 className='text-lg font-semibold mt-6'>Experience</h1>
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
        
      </div>
    </div>
  )
}
