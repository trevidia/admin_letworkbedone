import {faCheck, faCross, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";
import InputBox from "../../components/InputBox";
import InputTextBox from "../../components/InputTextBox";
import InputFileBox from "../../components/InputFileBox";
import InputBoxAndIcon from "../../components/InputBoxAndIcon";
import PageHeader from "../../components/PageHeader";
import ContentBoxHeader from "../../components/ContentBoxHeader";

const Profile = () => {
  return (
      <>
        {/* Header for the page */}
        <PageHeader icon={faUser} title={'Update Profile'} mainTitle={'Admins'}/>

      {/*  Main form */}
        <div className={'m-3 border border-slate-300 text-slate-800 '}>
          <ContentBoxHeader title={'Edit Profile'}/>
          <div className={'bg-white px-9 py-3 border-b border-slate-300'}>
            <InputBox title={'Admin Name:'}/>
            <InputBox title={'Admin Email:'}/>
            <InputBox title={'Admin Country:'}/>
            <InputBox title={'Admin Job:'} hint={"Admin, ADMIN USA etc."}/>
            <InputBox title={'Admin Contact:'}/>
            <InputTextBox title={'Admin About/Role:'}/>
            <InputFileBox title={'Admin Image:'}/>
          </div>
          <div className={'bg-white px-9 py-3 border-b border-slate-300'}>
            <div className={'mb-4'}>
              <h2 className={' text-[1.1em]'}>
                Account Password
              </h2>
              <span className={'text-slate-400 '}>
              If you do not wish to change your password, then just leave the fields below empty.
            </span>
            </div>
            <InputBoxAndIcon title={'Admin Password:'} iconStyle={'text-green-800'} icon={faCheck}/>
            <InputBoxAndIcon title={'Confirm Admin Password:'} iconStyle={'text-red-800'}  icon={faTimes}/>

          </div>
          <div className={'bg-white px-9 py-3'}>
            <div className={'py-2 flex flex-col md:flex-row sm:w-full'}>
              <div className={'mb-4 w-1/2 lg:w-1/4'}>

              </div>
              <button className={'input w-full md:w-1/2 h-10 resize-none bg-green-400 text-white'}>
                Update User Profile
              </button>
            </div>
          </div>
        </div>

      </>
  )
}

export default Profile