const InputTextBox = ({title, hint, onChange, value}) => {
    return <div className={'py-2 flex flex-col md:flex-row sm:w-full'}>
      <span className={`mb-4 w-1/2 lg:w-1/4 ${hint ? 'flex flex-col' : ''}`}>
          {title}
          {
              hint &&  <span className={'text-slate-400'}>
                  {hint}
              </span>
          }
      </span>

        <textarea required className={'input w-full md:w-1/2 h-32 resize-none'} onChange={onChange} value={value} />
    </div>
}

export default InputTextBox