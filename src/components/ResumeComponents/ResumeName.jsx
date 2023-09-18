import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function ResumeName() {
  const {inputData} = useContext(GlobalContext)
  return (
    <div className='w-full flex justify-between'>
      <div className='w-[50%] overflow-hidden'>
          <h1 className='text-lg font-semibold'>{inputData[0].data[0].value}</h1>
          <h1 className='text-sm'>{inputData[0].data[6].value}</h1>
          <h1 className='text-sm'>{inputData[0].data[2].value}, {inputData[0].data[3].value}</h1>
      </div>
      <div className='max-w-[50%] flex flex-col justify-center overflow-hidden'>
        {
          inputData[0].data[1].value !== '' &&
          <div className='text-xs flex items-center gap-2'><i className="fa-solid fa-envelope"></i>{inputData[0].data[1].value}</div>

        }
        {
          inputData[0].data[5].value !== '' &&
          <div className='text-xs flex items-center gap-2'><i className="fa-brands fa-github"></i>{inputData[0].data[5].value}</div>

        }
        {
          inputData[0].data[4].value !== '' &&
          <div className='text-xs flex items-center gap-2'><i className="fa-brands fa-linkedin"></i>{inputData[0].data[4].value}</div>

        }
      </div>
    </div>
  )
}
