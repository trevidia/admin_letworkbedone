import {useState} from "react";

const LanguageSelector = () => {
    const [language, setLanguage] = useState('English')
  return (
      <>
          <div className={'flex justify-between py-2 bg-white flex-wrap sm:flex-row items-center px-12 text-slate-600'}>
              <span className={'mb-3'}>
                  Current Selected Language: <b>{language}</b>
              </span>
              <div className={'flex justify-between sm:justify-start sm:w-auto w-full'}>
                  <div className={'mb-3 lg:mb-0'}>
                      Change Language:
                  </div>
                  <select className={'lg:ml-8  bg-white border border-slate-300 w-48 input'} onChange={(e)=>setLanguage(e.target.value)} value={language}>
                      <option>English</option>
                      <option>Swahili</option>
                  </select>
              </div>
          </div>
      </>
  )
}

export default LanguageSelector