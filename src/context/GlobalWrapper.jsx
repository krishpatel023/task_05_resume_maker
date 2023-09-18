import React , {useEffect, useState} from 'react'
import GlobalContext from './GlobalContext'

export default function GlobalWrapper(props) {
    //INPUT DATA
    const [inputData, setInputData]= useState([
      {
        categoryName: 'Personal Information',
        categoryTag: 'info',
        data : [
          {
            id: 1,
            field : "Name",
            value : ""
          },
          {
            id: 2,
            field : "Email",
            value : ""
          },
          {
            id: 3,
            field : "City",
            value : ""
          },
          {
            id: 4,
            field : "Country",
            value : ""
          },
          {
            id: 5,
            field : "LinkedIn Link",
            value : ""
          },
          {
            id: 6,
            field : "Github Link",
            value : ""
          },
          {
            id: 7,
            field : "Role",
            value : ""
          },
        ]
      },
      {
        categoryName: 'Skiils',
        categoryTag: 'skills',
        data : []
      },
      {
        categoryName: 'Education',
        categoryTag: 'education',
        data : []
      },
      {
        categoryName: 'Experience',
        categoryTag: 'experience',
        data : []
      }
    ])

    const addData = (tag,input)=>{
      var newData = inputData
      for(var i=0; i<newData.length; i++){
        if(newData[i].categoryTag === tag){
          newData[i].data = [...newData[i].data, input]
        }
      }
      setInputData([...newData])
    }

    const removeData = (tag, id)=>{
        var newData = inputData
        for(var i=0; i<newData.length; i++){
          if(newData[i].categoryTag ===tag){
            newData[i].data =  newData[i].data.filter((item) => item.id !== id)
          }
        }
        setInputData([...newData])
    }

    const modifyData = (tag, id, data)=>{
      console.log("CALLED", id,data);
      var newData = inputData
      var modification = false

      if(tag === 'info'){
        for(var i=0; i<newData.length; i++){
          if(newData[i].categoryTag === tag){
            for(var j=0; j<newData[i].data.length; j++){
              if(newData[i].data[j].id === id){
                newData[i].data[j].value = data;
                modification = true
                break;
              }
            }
          }
          if(modification === true){
            break
          }
        }
      }
      if(tag === 'experience' || tag === 'education'){
        for(var i=0; i<newData.length; i++){
          if(newData[i].categoryTag === tag){
            for(var j=0; j<newData[i].data.length; j++){
              if(newData[i].data[j].id === id){
                newData[i].data[j] = data;
                modification = true
                break;
              }
            }
          }
          if(modification === true){
            break
          }
        }
      }
      if(modification === false){
        addData(tag, data)
      }
      setInputData([...newData])
    }
    const  createRandom = (lengthOf)=>{
      var randomString = ''
      var Characters = '0123456789'
      for (var i =0 ; i < lengthOf ; i++){
          randomString += Characters.charAt(Math.floor(Math.random() * Characters.length))
      }
      return randomString
    }
    //TEMP
    useEffect(()=>{
      console.log("hi",inputData);
    },[inputData])

    const makeDemo = ()=>{
      const demoData = [
        {
          categoryName: 'Personal Information',
          categoryTag: 'info',
          data : [
            {
              id: 1,
              field : "Name",
              value : "Krish Patel"
            },
            {
              id: 2,
              field : "Email",
              value : "krishpatel0234@gmail.com"
            },
            {
              id: 3,
              field : "City",
              value : "Ahmedabad"
            },
            {
              id: 4,
              field : "Country",
              value : "India"
            },
            {
              id: 5,
              field : "LinkedIn Link",
              value : "www.linkedin.com/krish"
            },
            {
              id: 6,
              field : "Github Link",
              value : "www.github.com/krish"
            },
            {
              id: 7,
              field : "Role",
              value : "Frontend Developer"
            },
          ]
        },
        {
          categoryName: 'Skiils',
          categoryTag: 'skills',
          data : [
            {
              id : 77488,
              value : "HTML"
            },
            {
              id : 774388,
              value : "CSS"
            },
            {
              id : 77288,
              value : "JavaScript"
            },
            {
              id : 77480,
              value : "React.js"
            },
            {
              id : 7748222,
              value : "Node.js"
            },
            {
              id : 774890988,
              value : "MongoDB"
            },
          ]
        },
        {
          categoryName: 'Education',
          categoryTag: 'education',
          data : [
            {
              description : "Scored a 9.0 CGPA in my B.E.",
              endDate : "2023-09-30",
              id : "6393481126",
              instituteName : "Gujarat Technological University",
              qualification : "B.E. in CSE",
              startDate :"2023-09-08"
            },
            {
              description : "Scored a 86% in my 12th Grade",
              endDate : "2023-09-30",
              id : "6393481127",
              instituteName : "St. Kabir School",
              qualification : "HSC",
              startDate :"2023-09-08"
            }
          ]
        },
        {
          categoryName: 'Experience',
          categoryTag: 'experience',
          data : [
            {
              id : "347485937539875",
              companyName : "SoftTunner",
              description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos, error fugit nisi explicabo numquam soluta. Nostrum fuga nisi pariatur porro expedita laudantium inventore saepe, ratione delectus perferendis nihil odit?",
              jobTitle : "Frontend Intern",
              startDate :"2023-09-08",
              endDate : "2023-09-30",
            }
          ]
        }        
      ]
      setInputData([...demoData])
    }

    // ACTIVE SECTION
    const [activeSection, setActiveSection] = useState("info")

    //VALUES
    const value={
        activeSection,
        setActiveSection,
        inputData,
        addData,
        removeData,
        modifyData,
        createRandom,

        makeDemo
    }
  return (
    <GlobalContext.Provider value={value}>
        {props.children}
    </GlobalContext.Provider>
  )
}
