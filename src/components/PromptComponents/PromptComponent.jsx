import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import InfoComponent from './InfoComponent'
import EducationComponent from './EducationComponent'
import SkillsComponent from './SkillsComponent'
import ExperienceComponent from './ExperienceComponent'

export default function PromptComponent() {
    const {activeSection, setActiveSection} = useContext(GlobalContext)

    const handleColors = (data)=>{
        if(data === activeSection){
            return "bg-accent-color text-white"
        }
        else{
            return "border-2 border-gray-100"
        }
    }
    const handleCategoryChange = (data)=>{
        setActiveSection(data)
    }
  return (
    <div className='w-full h-full'>
      <div className=' w-full h-[10%] flex justify-center items-center'>
        <button className={`w-24 h-8  rounded-l-lg ${handleColors("info")}`} onClick={()=>{handleCategoryChange("info")}}> Info </button>
        <button className={`w-24 h-8 ${handleColors("skills")}`} onClick={()=>{handleCategoryChange("skills")}}> Skills </button>
        <button className={`w-24 h-8 ${handleColors("education")}`} onClick={()=>{handleCategoryChange("education")}}> Education </button>
        <button className={`w-24 h-8  rounded-r-lg ${handleColors("experience")}`} onClick={()=>{handleCategoryChange("experience")}}> Experience </button>
      </div>
      <div className='w-full h-[90%] flex justify-end items-center'>
        {
            activeSection==="info" && <InfoComponent/>
        }
        {
            activeSection==="skills" && <SkillsComponent/>
        }
        {
            activeSection==="education" && <EducationComponent/>
        }
        {
            activeSection==="experience" && <ExperienceComponent/>
        }
      </div>
    </div>
  )
}
