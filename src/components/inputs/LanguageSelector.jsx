import React from 'react'
import { IconLanguage } from '@tabler/icons-react'
const LanguageSelector = ({selectedLanguage,setSelectedLanguage,language}) => {
  return (
    <>
    <div className='curser-pointer rounded-full space-x-1 pl-2 bg-black flex items-center flex-row'>

      <IconLanguage size={20}/>
     <select
      className='bg-black flex flex-row rounded-full py-1 text-white '
      value={selectedLanguage}
      onChange={(e)=>setSelectedLanguage(e.target.value)}>
        {language.map((lang,index)=>(
          <option key={index} value={lang.value}>{lang.label}</option>
        ))}
    </select>
    </div>
    </>
  )
}

export default LanguageSelector