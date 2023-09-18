import React, { useContext, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function AddExperienceComponent({setStatusAddExperience}) {

    const {addData, createRandom} = useContext(GlobalContext)

    const handleAdd = ()=>{
        addData('experience', {
            id : createRandom(10),
            jobTitle : job,
            companyName : company,
            description : description,
            startDate : startDate,
            endDate: endDate,
        })
        setStatusAddExperience(false)
    }


    const [job,setJob]= useState()
    const [company, setCompany]= useState()
    const [description, setDescription]= useState()
    const [startDate, setStartDate]= useState()
    const [endDate, setEndDate]= useState()

    return (
        <div className='w-[90%] h-full flex items-center flex-col'>
          <div className='w-full h-[95%] flex items-center flex-col gap-4 overflow-y-auto custom-scrollbar'>
            {/* JOB TITLE */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Job Title</span></label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" onChange={(e)=>{setJob(e.target.value)}}/>
            </div>
            {/* COMPANY NAME */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Company Name</span></label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" onChange={(e)=>{setCompany(e.target.value)}}/>
            </div>
            {/* DESCRIPTION*/}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Description</span></label>
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full resize-none" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            {/* STARTING DATE */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Starting Date</span></label>
                <div className='w-full h-12 rounded-lg border-2 border-slate-200 flex justify-center items-center'>
                    <input className="w-full outline-0" type="date" name="" id="" onChange={(e)=>{setStartDate(e.target.value)}}/>
                </div>
            </div>
            {/* ENDING DATE */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Ending Date</span></label>
                <div className='w-full h-12 rounded-lg border-2 border-slate-200 flex justify-center items-center'>
                    <input className="w-full outline-0" type="date" name="" id="" onChange={(e)=>{setEndDate(e.target.value)}}/>
                </div>
            </div>
          </div>
          <div className='w-full flex gap-4 justify-center mt-3'>
            <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded' onClick={handleAdd}>
                ADD
            </button>
            <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded' onClick={()=>setStatusAddExperience(false)}>
                Cancel
            </button>
          </div>
        </div>
      )
}
