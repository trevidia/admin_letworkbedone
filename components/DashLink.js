import Link from 'next/link'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faChevronDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const DashLink = ({linkTitle, subLinks, specialClass, icon, link, headSpacing})=>{
    const [isOpen, setIsOpen] = useState(false);

    if (subLinks !== undefined){
        return (
            <>
                <div className={`w-full overflow-hidden transition-[max-height] ${isOpen ? "max-h-[300px]" : "max-h-12"}`}>
                    <div
                        className={'flex py-3 items-center group hover:text-slate-100 cursor-pointer transition-all'}
                        onClick={()=> !isOpen ? setIsOpen(true) : setIsOpen(false)}>
                        <div className={'w-[55px] text-slate-500 group-hover:text-slate-100 transition-all'}>
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <span>{linkTitle}</span>
                        <FontAwesomeIcon icon={faChevronRight}
                                         className={`ml-auto mr-2 text-slate-500 group-hover:text-slate-100 transition-all ${isOpen && "rotate-90"}`}/>
                    </div>
                    <div className={'ml-8'}>
                        {
                            subLinks.map((link, index)=>{
                                return (
                                   <Link href={link.path} key={link.title + index}>
                                       <a>
                                           <div className={'flex py-1.5 text-sm group hover:text-slate-100 transition-all'}>
                                               <div className={'mr-4 group-hover:text-slate-100 text-slate-500 transition-all'}>
                                                   <FontAwesomeIcon icon={faArrowCircleRight} className={specialClass}/>
                                               </div>
                                               <span>
                                                   {link.title}
                                               </span>
                                           </div>
                                       </a>
                                   </Link>
                                )
                            })
                        }
                    </div>
                </div>

            </>
        )
    }
    return (
        <Link href={link}>
            <a>
                <div className={'flex py-3 group hover:text-slate-100 transition-all'}>
                    <div className={`${headSpacing ? headSpacing : 'w-[55px]'} group-hover:text-slate-100 text-slate-500 transition-all`}>
                        <FontAwesomeIcon icon={icon} className={specialClass}/>
                    </div>
                    <span>{linkTitle}</span>
                </div>
            </a>
        </Link>
    )
}

export default DashLink