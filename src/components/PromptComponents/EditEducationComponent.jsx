import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function EditEducationComponent({setStatusEditEducation, myID}) {

    const {inputData,modifyData} = useContext(GlobalContext)

    const handleAdd = ()=>{
        modifyData('education', inputData[2].data[myID].id ,{
            id : inputData[2].data[myID].id,
            instituteName : institute,
            qualification : education,
            description : description,
            startDate : startDate,
            endDate: endDate,
        })
        setStatusEditEducation(false)
    }


    const [institute,setInstitute]= useState()
    const [education, setEducation]= useState()
    const [description, setDescription]= useState()
    const [startDate, setStartDate]= useState()
    const [endDate, setEndDate]= useState()

    useEffect(()=>{
        console.log("READY", myID,inputData)
        if(myID !== undefined){
            console.log("ID", myID);
            setInstitute(inputData[2].data[myID].instituteName)
            setEducation(inputData[2].data[myID].qualification)
            setDescription(inputData[2].data[myID].description)
            setStartDate(inputData[2].data[myID].startDate)
            setEndDate(inputData[2].data[myID].endDate)            
        }
    },[])
    return (

        <>
            {
                inputData?


        <div className='w-[90%] h-full flex items-center flex-col'>
          <div className='w-full h-[95%] flex items-center flex-col gap-4 overflow-y-auto custom-scrollbar'>
            {/* INSTITUTE NAME */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Institute Name</span></label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={inputData[2].data[myID].instituteName}  onChange={(e)=>{setInstitute(e.target.value)}}/>
            </div>
            {/* EDUCATIONAL QUALIFICATION */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Educational Qualification</span></label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={inputData[2].data[myID].qualification} onChange={(e)=>{setEducation(e.target.value)}}/>
            </div>
            {/* DESCRIPTION*/}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Description</span></label>
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full resize-none" defaultValue={inputData[2].data[myID].description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            {/* STARTING DATE */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Starting Date</span></label>
                <div className='w-full h-12 rounded-lg border-2 border-slate-200 flex justify-center items-center'>
                    <input className="w-full outline-0" type="date" name="" id="" defaultValue={inputData[2].data[myID].startDate} onChange={(e)=>{setStartDate(e.target.value)}}/>
                </div>
            </div>
            {/* ENDING DATE */}
            <div className='w-full'>
                <label className="label"><span className="label-text text-lg">Ending Date</span></label>
                <div className='w-full h-12 rounded-lg border-2 border-slate-200 flex justify-center items-center'>
                    <input className="w-full outline-0" type="date" name="" id="" defaultValue={inputData[2].data[myID].endDate} onChange={(e)=>{setEndDate(e.target.value)}}/>
                </div>
            </div>
          </div>
          <div className='w-full flex gap-4 justify-center mt-3'>
            <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded' onClick={handleAdd}>
                ADD
            </button>
            <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded' onClick={()=>setStatusEditEducation(false)}>
                Cancel
            </button>
          </div>
        </div>  
                      :null
            }
        </>
      )
}
