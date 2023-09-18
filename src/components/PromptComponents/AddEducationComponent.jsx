import React, { useContext, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function AddEducationComponent({setStatusAddEducation}) {
    const {addData, createRandom} = useContext(GlobalContext)

    const handleAdd = ()=>{
        addData('education', {
            id : createRandom(10),
            instituteName : institute,
            qualification : education,
            description : description,
            startDate : startDate,
            endDate: endDate,
        })
        setStatusAddEducation(false)
    }


    const [institute,setInstitute]= useState()
    const [education, setEducation]= useState()
    const [description, setDescription]= useState()
    const [startDate, setStartDate]= useState()
    const [endDate, setEndDate]= useState()

    return (
        <div className='w-[90%] h-full flex items-center flex-col'>
          <div className='w-full h-[95%] flex items-center flex-col gap-4 overflow-y-auto custom-scrollbar'>
            {/* INSTITUTE NAME */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Institute Name</span></label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" onChange={(e)=>{setInstitute(e.target.value)}}/>
            </div>
            {/* EDUCATIONAL QUALIFICATION */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Educational Qualification</span></label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" onChange={(e)=>{setEducation(e.target.value)}}/>
            </div>
            {/* DESCRIPTION*/}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Description</span></label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" onChange={(e)=>{setDescription(e.target.value)}}/>
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
            <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded' onClick={()=>setStatusAddEducation(false)}>
                Cancel
            </button>
          </div>
        </div>
      )
}
