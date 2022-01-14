import ContentBoxHeader from "./ContentBoxHeader";

const ContentBox = ({children, contentTitle}) => {
  return <div className={'mx-4 my-4 border border-slate-300'}>
      <ContentBoxHeader title={contentTitle}/>
      <div className={'bg-white py-3 px-9'}>
          {children}
      </div>
  </div>
}

export default ContentBox