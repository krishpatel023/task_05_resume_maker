import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function EditExperienceComponent({setStatusEditExperience, myID}) {

    const {inputData,modifyData} = useContext(GlobalContext)

    const handleAdd = ()=>{
        modifyData('experience', inputData[3].data[myID].id ,{
            id : inputData[3].data[myID].id,
            jobTitle : job,
            companyName : company,
            description : description,
            startDate : startDate,
            endDate: endDate,
        })
        setStatusEditExperience(false)
    }


    const [job,setJob]= useState()
    const [company, setCompany]= useState()
    const [description, setDescription]= useState()
    const [startDate, setStartDate]= useState()
    const [endDate, setEndDate]= useState()

    console.log(job,company,description,startDate,endDate);
    useEffect(()=>{
        console.log("READY", myID,inputData)
        if(myID !== undefined){
            console.log("ID", myID);
            setJob(inputData[3].data[myID].jobTitle)
            setCompany(inputData[3].data[myID].companyName)
            setDescription(inputData[3].data[myID].description)
            setStartDate(inputData[3].data[myID].startDate)
            setEndDate(inputData[3].data[myID].endDate)            
        }
    },[])
    return (

        <>
            {
                inputData ?


        <div className='w-[90%] h-full flex items-center flex-col'>
          <div className='w-full h-[95%] flex items-center flex-col gap-4 overflow-y-auto custom-scrollbar'>
            {/* JOB TITLE */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Job Title</span></label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={inputData[3].data[myID].jobTitle}  onChange={(e)=>{setJob(e.target.value)}}/>
            </div>
            {/* COMPANY NAME */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Company Name</span></label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={inputData[3].data[myID].companyName} onChange={(e)=>{setCompany(e.target.value)}}/>
            </div>
            {/* DESCRIPTION*/}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Description</span></label>
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full resize-none" defaultValue={inputData[3].data[myID].description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            {/* STARTING DATE */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Starting Date</span></label>
                <div className='w-full h-12 rounded-lg border-2 border-slate-200 flex justify-center items-center'>
                    <input className="w-full outline-0" type="date" name="" id="" defaultValue={inputData[3].data[myID].startDate} onChange={(e)=>{setStartDate(e.target.value)}}/>
                </div>
            </div>
            {/* ENDING DATE */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Ending Date</span></label>
                <div className='w-full h-12 rounded-lg border-2 border-slate-200 flex justify-center items-center'>
                    <input className="w-full outline-0" type="date" name="" id="" defaultValue={inputData[3].data[myID].endDate} onChange={(e)=>{setEndDate(e.target.value)}}/>
                </div>
            </div>
          </div>
          <div className='w-full flex gap-4 justify-center mt-3'>
            <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded' onClick={handleAdd}>
                ADD
            </button>
            <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded' onClick={()=>setStatusEditExperience(false)}>
                Cancel
            </button>
          </div>
        </div>  
                      :null
            }
        </>
      )
}
