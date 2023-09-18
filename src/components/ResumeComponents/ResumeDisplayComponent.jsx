import React, { useContext, useRef, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'
import ReactToPrint from 'react-to-print'
import Resume1Layout from './Resume1Layout'
import Resume2Layout from './Resume2Layout'

import './print.css';

export default function ResumeDisplayComponent() {

  const {makeDemo} = useContext(GlobalContext)

  const pdfRef = useRef()
  const [layout, setLayout]=useState(1)

  console.log(pdfRef.current);
  return (
    <>
    <div className='w-[25rem] h-[35.25rem]  shadow-xl border-2 border-slate-100 flex justify-center items-center'>
      <div ref={pdfRef} className='w-full h-full flex justify-center items-center overflow-y-auto print-container'  >
        {
          layout === 1 &&  <Resume1Layout/> 
        }
        {
          layout === 2 &&  <Resume2Layout/> 
        }
      </div>
    </div>
    <div className='w-full flex justify-center mt-2 gap-4'>
      <ReactToPrint
        trigger={()=>
          <button className='w-40 h-10 rounded bg-accent-color text-accent-complementary flex gap-4 justify-center items-center'
            // onClick={toPDF}
          >
            DOWNLOAD <i className="fa-solid fa-file-arrow-down"></i>
          </button>        
        }
        content = {()=>pdfRef.current}
        documentTitle='Resume'
      />



      <button className='w-24 h-10 rounded bg-accent-color text-accent-complementary flex gap-4 justify-center items-center'
        onClick={()=>{makeDemo()}}
      >
        DEMO 
      </button>
      <button className='w-20 h-10 rounded bg-accent-color text-accent-complementary flex gap-4 justify-center items-center'
        onClick={()=>{setLayout(1)}}
      >
        Layout 1 
      </button>
      <button className='w-20 h-10 rounded bg-accent-color text-accent-complementary flex gap-4 justify-center items-center'
        onClick={()=>{setLayout(2)}}
      >
        Layout 2 
      </button>
      
    </div>
    </>
  )
}
