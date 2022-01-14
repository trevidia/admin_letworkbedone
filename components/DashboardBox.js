import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faTable} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const DashboardBox = ({children, link, icon, upStyle, title, bottomStyle}) => {
  return (
      <>
          <div className={` w-full md:w-[48%] lg:w-[30%] xl:w-[25%] xl:mx-2 h-40 my-3 rounded-md overflow-hidden ${upStyle}`}>
              <div className={'h-full'}>
                  <div className={'flex h-3/4 justify-between px-6 pb-8 pt-5 text-white'}>
                      <FontAwesomeIcon icon={icon} className={'text-[5em] md:text-[3em]'}/>
                      <div className={'flex flex-col items-end'}>
                          <div className={'font-semibold text-lg'}>
                              {
                                  children
                              }
                          </div>
                          <span className={'md:text-sm'}>
                          {title}
                      </span>
                      </div>
                  </div>
                  <Link href={link}>
                      <a>
                          <div className={`flex justify-between h-1/4 bg-white items-center px-6 py-4 ${bottomStyle}`}>
                        <span>
                            View Details
                        </span>
                              <FontAwesomeIcon icon={faArrowCircleRight}/>
                          </div>
                      </a>
                  </Link>
              </div>
          </div>
      </>
  )
}

export default DashboardBox