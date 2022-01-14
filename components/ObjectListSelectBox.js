const ObjectListSelectBox = ({title, hint, options, selected, onChange, defaultTitle}) => {
    return <div className={'py-2 flex flex-col md:flex-row sm:w-full'}>
      <span className={`mb-4 w-1/2 lg:w-1/4 ${hint ? 'flex flex-col' : ''}`}>
          {title}
          {
              hint &&  <span className={'text-slate-400'}>
                  {hint}
              </span>
          }
      </span>

        <select required className={'input w-full bg-white md:w-1/2 h-10'} value={selected} onChange={onChange}>
            <option value={"default"} hidden>{defaultTitle}</option>
            {
                options && options.map((el, index) => {
                    return <option key={el.title + index} value={el.id}>{el.title}</option>
                })
            }
        </select>
    </div>
}

export default ObjectListSelectBox