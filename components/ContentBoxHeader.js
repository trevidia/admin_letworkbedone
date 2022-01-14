const ContentBoxHeader = ({title}) => {
  return <div className={'w-full bg-neutral-50 px-9 h-12 border-b border-slate-300 flex items-center'}>
      <h2 className={' text-[1.1em]'}>
          {title}
      </h2>
  </div>
}

export default ContentBoxHeader;