import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const InputFileBoxAndIcon = ({title, hint, icon, iconStyle}) => {
    return <div className={'py-2 flex flex-col md:flex-row sm:w-full'}>
      <span className={`mb-4 w-1/2 lg:w-1/4 ${hint ? 'flex flex-col' : ''}`}>
          {title}
          {
              hint &&  <span className={'text-slate-400'}>
                  {hint}
              </span>
          }
      </span>

        <div className={'flex w-full md:w-1/2 '}>
            <div className={`bg-gray-300 h-10 rounded w-10 flex items-center justify-center ${iconStyle}`}>
                <FontAwesomeIcon icon={icon}/>
            </div>
            <input type={'file'} required className={'input h-10 w-full resize-none'} />
        </div>
    </div>
}

export default InputFileBoxAndIcon