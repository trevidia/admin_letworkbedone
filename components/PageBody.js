import PageHeader from "./PageHeader";
import ContentBox from "./ContentBox";

const PageBody = ({pageHeading, mainPageTitle, icon, contentBoxTitle, children}) => {
  return (
      <>
          <PageHeader title={pageHeading} mainTitle={mainPageTitle} icon={icon}/>
          <ContentBox contentTitle={contentBoxTitle}>
              {
                  children
              }
          </ContentBox>
      </>
  )
}

export default PageBody