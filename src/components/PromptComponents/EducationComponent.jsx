import React, { useState , useContext} from 'react'
import AddEducationComponent from './AddEducationComponent'
import GlobalContext from '../../context/GlobalContext'
import EditEducationComponent from './EditEducationComponent'

export default function EducationComponent() {
    const [statusAddEducation, setStatusAddEducation] = useState(false)
    const [statusEditEducation, setStatusEditEducation] = useState(false)

    const [editCompId, setEditCompId] = useState()
    const {inputData, removeData} = useContext(GlobalContext)

    const handleEdit = (id)=>{
        setEditCompId(id)
        setStatusEditEducation(true)
    }
    return(
        <>
        {
            statusAddEducation === true &&
            <AddEducationComponent
                setStatusAddEducation = {setStatusAddEducation}
            />
        } 
        {
            statusEditEducation === true &&
            <EditEducationComponent
                setStatusEditEducation = {setStatusEditEducation}
                myID = {editCompId}
            />
        }
        {   statusAddEducation === false && statusEditEducation === false &&
            <div className='w-[90%] h-full flex flex-col gap-4'>
                <h1 className='text-lg font-semibold'>Current Education</h1>

                {
                    inputData[2].data.map((data,i)=>
                        <div className='w-full rounded-lg border-2 border-slate-200 flex justify-center'>
                            <div className='w-[70%]'>
                                <h1 className='text-xl font-semibold'>{data.qualification}</h1>
                                <h1 className='text-lg font-base'>{data.instituteName}</h1>
                                <h4>{data.startDate} - {data.endDate}</h4>                    
                            </div>
                            <div className='w-[20%] flex flex-col items-center justify-center gap-2'>
                                <button className='w-20 h-6 bg-accent-color text-accent-complementary rounded' onClick={()=>handleEdit(i)}>Edit</button>
                                <button className='w-20 h-6 bg-[#ff2929] text-accent-complementary rounded' onClick={()=>removeData('education', data.id)}>Delete</button>
                            </div>
                        </div>                    
                    )
                }

                <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded' onClick={()=>setStatusAddEducation(true)}>
                ADD FIELD
                </button>
            </div>
        }
        </>
    )
}
