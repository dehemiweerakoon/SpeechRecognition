/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{ } from 'react'
import { IconBriefcase,IconBulb,IconSchool,IconWriting,IconMoodSmile,IconHeart } from '@tabler/icons-react'

 const categories = [
    {icon:IconBriefcase,label:'Business'},
    {icon:IconBulb,label:'Technology'},
    {icon:IconSchool,label:'Education'},
    {icon:IconWriting,label:'Journalism'},
    {icon:IconMoodSmile,label:'Lifestyle'},
    {icon:IconHeart,label:'Health'}
 ];
const categoryLinks:React.FC = () => {

  return (
    <div className="mt-10 sm:mt-20 ">
      {
        categories.map((category,index)=>(
          <div key={category.label} className="flex flex-col items-center ju ">
           
          </div>
        ))
      }
    </div>
  )
}

export default categoryLinks