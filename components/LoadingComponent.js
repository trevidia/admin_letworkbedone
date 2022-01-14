import {useLottieLoadingAnimation} from "../lib/useLottieAnimation";


const LoadingComponent = () => {
    const loading = useLottieLoadingAnimation()


    return   <div className={"fixed inset-x-0 z-30 top-0 bg-black grid place-content-center h-screen bg-opacity-5 "}>
      <div className={"bg-white h-[200px] w-[200px] flex flex-col justify-around items-center rounded-md "}>
         <span className={'h-[100px] w-[100px]'}>
         {
             loading
         }
         </span>
          <span className={"text-2xl text-slate-700"}>
              Loading
          </span>
      </div>
  </div>
}

export default LoadingComponent