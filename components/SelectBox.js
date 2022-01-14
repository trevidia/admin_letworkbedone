const SelectBox = ({title, hint, options}) => {
    return <div className={'py-2 flex flex-col md:flex-row sm:w-full'}>
      <span className={`mb-4 w-1/2 lg:w-1/4 ${hint ? 'flex flex-col' : ''}`}>
          {title}
          {
              hint &&  <span className={'text-slate-400'}>
                  {hint}
              </span>
          }
      </span>

        <select required className={'input w-full bg-white md:w-1/2 h-10'}>
            {
                options.map((el, index) => {
                    return <option key={el + index}>{el}</option>
                })
            }
        </select>
    </div>
}

export default SelectBox