import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function SkillsComponent() {

  const [skillName, setSkillName] = useState()

  const {inputData, addData, removeData, createRandom} = useContext(GlobalContext)

  const handleAdd= ()=>{
    if(skillName !== undefined){
      addData("skills", {
        id : createRandom(10),
        value : skillName
      })
      document.getElementById("skillInput").value = ""
      setSkillName()
    }
  }
  const handleRemove= (id)=>{
    removeData("skills", id)
  }

  useEffect(()=>{
    console.log("REFRESHING");
  },[inputData])
  return (
    <div className='w-[90%] h-full flex items-center flex-col'>
      <div className='w-full h-[95%] flex items-start flex-col gap-4 overflow-y-auto'>
        {/* ADD SKILL */}
        <div className='w-full'>
            <label className="label"><span className="label-text text-lg">Add Skills</span></label>
            <input type="text" id="skillInput" placeholder="Type here" className="input input-bordered w-full" onChange={(e)=>{setSkillName(e.target.value)}}/>
        </div>
        <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded' onClick={handleAdd}>
            Add Skill
        </button>

        <h1 className='text-lg'>Selected Skills</h1>
        {/* EXISTING SKILL */}
        {
          inputData?
          inputData[1].data.map((data)=>
            <div className=' h-8 bg-secondary-color rounded flex items-center p-2 gap-4' key={data.id}>
                <h1>{data.value}</h1>
                <button onClick={()=>{handleRemove(data.id)}}><i className="fa-solid fa-xmark"></i></button>
            </div>          
          )
          :
          null
        }
        {
          inputData[1]?.data.length === 0?
          <span>No Skills Added.</span>
          :
          null 
        }
      </div>
    </div>
  )
}
