import Image from "next/image";
import admin from "../public/adminLogo.png";
import {faPowerOff, faTachometerAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import Link from "next/link";

const ProfileDropDown = ({adminUsername}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleDropControl = ()=>{
        isOpen === true ? setIsOpen(false) : setIsOpen(true)
    }

    useEffect(()=>{
        const handleDropDown = () => {
            if (isOpen){
                console.log('ji')
                setIsOpen(false)
            }
        }
        window.onclick = handleDropDown
        return () => {
            window.removeEventListener('click', handleDropDown)
        }
    },[isOpen])

  return (
      <>
          <div className={'relative '}>
              <div className={'border border-slate-400 cursor-pointer rounded flex w-max py-1 px-3 items-center'}
                   onClick={handleDropControl}>
                  <div className={'relative h-7 w-7 overflow-hidden rounded-full'}>
                      <Image src={admin} alt={'profile picture'} placeholder={"blur"} layout={'fill'} objectFit={'cover'}/>
                  </div>
                  <span className={'ml-3 text-slate-600 text-sm'}>
                      {
                          adminUsername
                      }
                  </span>
              </div>
              {
                  isOpen && <div className={"absolute inset-x-0 mt-6 rounded drop-shadow-lg z-10  bg-white "}>
                      <Link href={'/'}>
                          <a>
                              <div className={'flex py-3 hover:bg-stone-200 px-3 transition-all'}>
                                  <div className={`ml-2 w-[38px] text-slate-500`}>
                                      <FontAwesomeIcon icon={faTachometerAlt}/>
                                  </div>
                                  <span>Dashboard</span>
                              </div>
                          </a>
                      </Link>
                      <Link href={'/admins/profile'}>
                          <a>
                              <div className={'flex py-3 hover:bg-stone-200 px-3 transition-all'}>
                                  <div className={`ml-2 w-[38px] text-slate-500`}>
                                      <FontAwesomeIcon icon={faUser}/>
                                  </div>
                                  <span>My Profile</span>
                              </div>
                          </a>
                      </Link>
                      <div className={'h-[1px] w-full bg-slate-200 '}>
                          {/* <!--Divider-->  */}
                      </div>
                      <div className={'flex py-3 hover:bg-stone-200 cursor-pointer px-3  transition-all'}>
                          <div className={'w-[38px] ml-2  text-slate-500'}>
                              <FontAwesomeIcon icon={faPowerOff}/>
                          </div>
                          <span>Logout</span>
                      </div>
                  </div>
              }
          </div>
      </>
  )
}

export default ProfileDropDown