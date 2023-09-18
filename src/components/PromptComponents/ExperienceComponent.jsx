import React, { useContext, useState } from 'react'
import AddExperienceComponent from './AddExperienceComponent'
import GlobalContext from '../../context/GlobalContext'
import EditExperienceComponent from './EditExperienceComponent'

export default function ExperienceComponent() {
  const [statusAddExperience, setStatusAddExperience] = useState(false)
  const [statusEditExperience, setStatusEditExperience] = useState(false)
  const [editCompId, setEditCompId] = useState()
  const {inputData, removeData} = useContext(GlobalContext)

  const handleEdit = (id)=>{
    setEditCompId(id)
    setStatusEditExperience(true)
  }
  return (
    <>
    {
        statusAddExperience === true &&
        <AddExperienceComponent
          setStatusAddExperience = {setStatusAddExperience}
        />
    }
    {
        statusEditExperience === true &&
        <EditExperienceComponent
          setStatusEditExperience={setStatusEditExperience}
          myID = {editCompId}
        />
    }
    { 
      statusEditExperience === false && statusAddExperience===false &&
        <div className='w-[90%] h-full flex flex-col gap-4'>
            <h1 className='text-lg font-semibold'>Current Experience</h1>

            {
              inputData?
              inputData[3]?.data.map((data,i)=>
                <div className='w-full rounded-lg border-2 border-slate-200 flex justify-center' key={data.id}>
                    <div className='w-[70%] mb-4 mt-4'>
                        <h1 className='text-xl font-semibold'>{data.jobTitle}</h1>
                        <h1 className='text-lg font-base'>{data.companyName}</h1>
                        <h4>{data.startDate} - {data.endDate}</h4>  
                        <span>{data.description}</span>                  
                    </div>
                    <div className='w-[20%] flex flex-col items-center justify-center gap-2'>
                        <button className='w-20 h-6 bg-accent-color text-accent-complementary rounded' onClick={()=>{handleEdit(i)}}>Edit</button>
                        <button className='w-20 h-6 bg-[#ff2929] text-accent-complementary rounded' onClick={()=>{removeData("experience",data.id)}}>Delete</button>
                    </div>
                </div>              
              )
              :
              null
            }

            <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded' onClick={()=>setStatusAddExperience(true)}>
            ADD FIELD
            </button>
        </div>
    }
    </>
  )
}
