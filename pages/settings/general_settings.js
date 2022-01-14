import PageHeader from "../../components/PageHeader";
import {
  faArchive,
  faBolt,
  faCheckSquare,
  faCog, faCopyright, faDollarSign, faEnvelope, faGlobe,
  faLaptop,
  faLink,
  faLocationArrow, faPercent, faPercentage,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import ContentBox from "../../components/ContentBox";
import InputBoxAndIcon from "../../components/InputBoxAndIcon";
import SelectionAndIcon from "../../components/SelectionAndIcon";
import InputTextBox from "../../components/InputTextBox";
import InputFileBoxAndIcon from "../../components/InputFileBoxAndIcon";
import SelectBox from "../../components/SelectBox";
import InputBox from "../../components/InputBox";
import {faFacebook, faFacebookF, faGoogle, faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const GeneralSettings = () => {
  return (
      <>
        <PageHeader mainTitle={'Settings / General Settings'} title={'General Settings'} icon={faCog}/>
        <ContentBox contentTitle={'General Settings'}>
          <InputBoxAndIcon icon={faLaptop} title={"Site Title:"} />
          {/* todo its enabled by default so I would remove it when i feel its not needed*/}
          <SelectionAndIcon icon={faLink} title={"Enable Site (WWW):"} />
          <SelectionAndIcon icon={faLink} title={"Do you wish to do All Manual Payouts:"} />
          <InputTextBox title={"Site Description:"}/>
          <InputBoxAndIcon icon={faBolt} title={"Site Keywords:"} />
          <InputBoxAndIcon icon={faUser} title={"Site Author:"} />
          <InputBoxAndIcon icon={faCheckSquare} title={"Site Name:"} />
          <InputFileBoxAndIcon icon={faLocationArrow} title={"Site Favicon:"} />
          <SelectBox title={"Site Logo Type:"} options={['Image', 'Text']}/>
          <InputFileBoxAndIcon icon={faLocationArrow} title={"Site Logo Image:"} />
          <SelectBox title={"Enable Mobile Logo:"} options={['yes', 'No']}/>
          <InputFileBoxAndIcon icon={faLocationArrow} title={"Site Mobile Logo:"} />
          <InputFileBoxAndIcon icon={faLocationArrow} title={"Site Email Logo:"} />
          <InputFileBoxAndIcon icon={faLocationArrow} title={"Site Watermark Logo:"} />
          <InputBox title={'Google Analytics Tracking ID:'}/>
          <InputBoxAndIcon icon={faGlobe} title={"Site Url:"}
                           hint={<div className={' text-sm'}><span className={'text-rose-700'}>NB:</span> Enter the complete url. Ex: https://www.GigToDo.com</div>}/>
          <InputBoxAndIcon icon={faEnvelope} title={'Site Email Address:'}/>
          <SelectionAndIcon icon={faLink} title={'Show Language Switcher:'}/>
          <InputBoxAndIcon icon={faCopyright} title={'Copyright Text:'}/>
          <SelectBox title={"Site TimeZone:"} options={['America/Chicago', 'America/Lagos']}/>
          <SelectBox title={"Site Currency:"} options={['US dollar ($)', 'Nigerian naira(N)']}/>
          <SelectBox title={"Enable Referrals:"} options={['Yes', 'No']}/>
          <SelectBox title={"Enable Knowledge bank popup:"} options={['Yes', 'No']}/>
          <InputBoxAndIcon icon={faDollarSign} title={'Payments for each referral:'}/>
          <InputBox title={'Order Auto Complete:'} hint={<div className={'text-sm'}>No of days required for order to automatically be completed</div>}/>
          <SelectBox title={"Enable Maintenance Mode:"} options={['Yes', 'No']}/>
          <div className={'bg-white px-9 py-3'}>
            <div className={'py-2 flex flex-col md:flex-row sm:w-full'}>
              <div className={'mb-4 w-1/2 lg:w-1/4'}>

              </div>
              <button className={'input w-full md:w-1/2 h-10 resize-none bg-green-400 text-white'}>
                Update General Settings
              </button>
            </div>
          </div>
        </ContentBox>
        <ContentBox contentTitle={'Seller Settings'}>
          <InputBoxAndIcon icon={faPercent} title={'Level One Seller Ratings:'} hint={<div className={'text-xs'}>Positive ratings (in Percentage required to become a level one seller.</div>}/>
          <InputBoxAndIcon icon={faArchive} title={'Level One Completed Orders:'} hint={<div className={'text-xs'}>No. of orders required to be completed to become level one seller.</div>}/>
          <InputBoxAndIcon icon={faPercent} title={'Level Two Seller Ratings:'} hint={<div className={'text-xs'}>Positive ratings (in percentage) required to become a level two seller.</div>}/>
          <InputBoxAndIcon icon={faArchive} title={'Level Two Seller Completed Orders:'} hint={<div className={'text-xs'}>No. of orders required to be completed to become level two seller.</div>}/>
          <InputBoxAndIcon icon={faPercent} title={'Top Rated Seller Ratings:'}  hint={<div className={'text-xs'}>Positive ratings (in percentage) required to become a top rated seller.</div>}/>
          <InputBoxAndIcon icon={faArchive} title={'Top Rated Seller Completed:'} hint={<div className={'text-xs'}>No. of orders required to be completed to become top rated seller.</div>}/>
          <SelectBox title={"Manually Approve Proposals:"} options={['Yes', 'No']}/>
          <SelectBox title={"Disable Local video upload:"} hint={<div className={'text-xs'}>It will prevent users from adding video from their to computer to proposal video.</div>} options={['Yes', 'No']}/>
          <SelectBox title={"Send Confirmation Email After Sign Up:"} options={['Yes', 'No']}/>
          <SelectBox title={"New Proposal Email:"} hint={<div className={'text-xs'}>When enabled (yes) each time a user publishes a proposal, admin will be notified.</div>} options={['Yes', 'No']}/>
          <SelectBox title={"Enable Unlimited Revisions:"} options={['Yes', 'No']}/>
          <SelectBox title={"Buyer Requests:"} options={['Show All Buyer Requests To Sellers', 'Show Relevant Buyer Requests To Sellers']}/>
          <div className={'bg-white px-9 py-3'}>
            <div className={'py-2 flex flex-col md:flex-row sm:w-full'}>
              <div className={'mb-4 w-1/2 lg:w-1/4'}>

              </div>
              <button className={'input w-full md:w-1/2 h-10 resize-none bg-green-400 text-white'}>
                Update Seller Settings
              </button>
            </div>
          </div>
        </ContentBox>
        <ContentBox contentTitle={'Social Media Login Settings'} >
          <SelectBox title={"Enable Social Login:"}  hint={<div className={'text-xs'}>Enable or disable social media on the website.</div>} options={['Yes', 'No']}/>
          <InputBoxAndIcon icon={faFacebookF} title={'Facebook App Id:'} hint={<div className={'text-xs text-green-500'}>How To?</div>}/>
          <InputBoxAndIcon icon={faFacebookF} title={'Facebook App Secret:'}/>
          <InputBoxAndIcon icon={faGoogle} title={'Google Client Id:'} hint={<div className={'text-xs text-green-500'}>How To?</div>}/>
          <InputBoxAndIcon icon={faGoogle} title={'Google Client Secret :'}/>
          <InputBoxAndIcon icon={faLinkedinIn} title={'Linkedin Client Id :'}/>
          <InputBoxAndIcon icon={faLinkedinIn} title={'Linkedin Client Secret:'}/>
          <div className={'bg-white px-9 py-3'}>
            <div className={'py-2 flex flex-col md:flex-row sm:w-full'}>
              <div className={'mb-4 w-1/2 lg:w-1/4'}>

              </div>
              <button className={'input w-full md:w-1/2 h-10 resize-none bg-green-400 text-white'}>
                Update Social Login Settings
              </button>
            </div>
          </div>
        </ContentBox>
      </>
  )
}

export default GeneralSettings