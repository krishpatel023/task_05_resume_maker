import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function InfoComponent() {
  const {inputData,modifyData} = useContext(GlobalContext)

  const handleChange = (id, data)=>{
    modifyData("info", id , data)
  }
  return (
    <div className='w-[90%] h-full flex items-center flex-col'>
      <div className='w-full h-[95%] flex items-center flex-col gap-4 overflow-y-auto custom-scrollbar'>
        {/* NAME */}
        <div className='w-full'>
            <label className="label"><span className="label-text text-lg">Name</span></label>
            <input type="text" placeholder="Type here" defaultValue={inputData[0].data[0].value} className="input input-bordered w-full" onChange={(e)=>handleChange(1, e.target.value)}/>
        </div>
        {/* EMAIL */}
        <div className='w-full'>
            <label className="label"><span className="label-text text-lg">Email</span></label>
            <input type="text" placeholder="Type here" defaultValue={inputData[0].data[1].value} className="input input-bordered w-full" onChange={(e)=>handleChange(2, e.target.value)} />
        </div>
        {/* CITY */}
        <div className='w-full'>
            <label className="label"><span className="label-text text-lg">City</span></label>
            <input type="text" placeholder="Type here" defaultValue={inputData[0].data[2].value} className="input input-bordered w-full" onChange={(e)=>handleChange(3, e.target.value)} />
        </div>
        {/* COUNTRY */}
        <div className='w-full'>
            <label className="label"><span className="label-text text-lg">Country</span></label>
            <input type="text" placeholder="Type here" defaultValue={inputData[0].data[3].value} className="input input-bordered w-full" onChange={(e)=>handleChange(4, e.target.value)} />
        </div>
        {/* LinkedIn */}
        <div className='w-full'>
            <label className="label"><span className="label-text text-lg">LinkedIn Link</span></label>
            <input type="text" placeholder="Type here" defaultValue={inputData[0].data[4].value} className="input input-bordered w-full" onChange={(e)=>handleChange(5, e.target.value)} />
        </div>
        {/* GITHUB */}
        <div className='w-full'>
            <label className="label"><span className="label-text text-lg">Github Link</span></label>
            <input type="text" placeholder="Type here" defaultValue={inputData[0].data[5].value} className="input input-bordered w-full" onChange={(e)=>handleChange(6, e.target.value)} />
        </div>
        {/* ROLE */}
        <div className='w-full'>
            <label className="label"><span className="label-text text-lg">Role</span></label>
            <input type="text" placeholder="Type here" defaultValue={inputData[0].data[6].value} className="input input-bordered w-full" onChange={(e)=>handleChange(7, e.target.value)} />
        </div>
      </div>
      {/* <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded'>
        ADD
      </button> */}
    </div>
  )
}
