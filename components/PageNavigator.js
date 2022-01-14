import axios from "../lib/AxiosConfig";
import {decode} from "html-entities";

const PageNavigator = ({data, stateSetter}) => {
  return (
      <>
          <div className={'border-collapse flex w-max mx-auto border border-slate-300 mt-3'}>
              {
                  data.links.map((value, index)=>{
                      return  <div
                          key={value.label + index}
                          onClick={()=>{
                              if (value.url !== null){
                                  axios.get(value.url).then(
                                      (res)=>{
                                          stateSetter(res.data)
                                      }
                                  ).catch(err=>console.log(err))
                              }
                          }
                          }
                          className={`p-3 cursor-pointer ${value.active ? "bg-green-500 text-white hover:bg-green-600" : "bg-white hover:bg-slate-100"} border-slate-300 ${index !== data.links.length - 1 ? "border-r" : ""}`}>
                    <span aria-hidden={true}>
                      {
                          decode(value.label)
                      }
                    </span>
                      </div>
                  })
              }
          </div>
      </>
  )
}

export default PageNavigator