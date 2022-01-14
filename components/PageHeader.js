import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PageHeader = ({icon, mainTitle, title})=>{
    return <div className={'flex justify-between bg-white mt-2 px-12 h-14 items-center text-slate-700 text-lg'}>
        <div>
            <FontAwesomeIcon icon={icon}/>
            <span className={'ml-2'}>{mainTitle}</span>
        </div>
        <span>
            {title}
          </span>
    </div>
}

export default PageHeader