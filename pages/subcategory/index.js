import PageHeader from "../../components/PageHeader";
import { faPencilAlt, faPlusCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import ContentBox from "../../components/ContentBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import axios from "../../lib/AxiosConfig"
import {useRouter} from "next/router";
import {useState} from "react";
import {faStackExchange} from "@fortawesome/free-brands-svg-icons";
import {decode} from "html-entities";
import PageNavigator from "../../components/PageNavigator";

const ViewSubCat = ({data}) => {
  const router = useRouter();
  const [subcategories, setSubcategories] = useState(data)
  const [deleteState, setDeleteState] = useState([false, 0])



  return (
      <>
        {
          deleteState[0] &&   <div className={"fixed h-screen inset-x-0 top-0 grid place-content-center bg-black bg-opacity-20 z-20"}>
            <div className={" h-[200px] bg-white rounded-md w-[300px] px-3 py-2"}>
              <div className={"h-2/3 w-full flex items-center text-center"}>
                      <span className={'uppercase text-red-500'}>
                      Are you sure you want to delete this subcategory
                      </span>
              </div>
              <div className={"flex items-center justify-between px-4 h-1/3"}>
                <button
                    onClick={()=>{
                      const deleteCat = async () => {
                        await axios.post(`/subcategory/`, {id: deleteState[1]}).then(
                            (res)=>{
                              console.log(res)
                              setSubcategories(res.data)
                              setDeleteState([false, 0])
                            }
                        )
                      }
                      deleteCat()
                    }
                    }
                    className={"px-3 py-2 bg-red-400 hover:bg-red-500 rounded-sm text-sm text-white uppercase"}>
                  Delete
                </button>
                <button
                    onClick={()=>{
                      setDeleteState([false, 0])
                    }
                    }
                    className={"px-3 py-2 bg-green-400 hover:bg-green-500 rounded-sm text-sm text-white uppercase"}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        }
        <PageHeader mainTitle={'Subcategories'} title={
          <Link href={"/subcategory/insert"}>
            <a>
              <div className={"bg-green-600 text-[16px] py-2 px-3 hover:bg-emerald-600 transition-all text-white"}>
                <FontAwesomeIcon icon={faPlusCircle}/>
                <span className={"ml-2"}>
                      Add Subcategory
                  </span>
              </div>
            </a>
          </Link>
        } icon={faStackExchange}/>
        <ContentBox contentTitle={'All Subcategories'}>
          <table className={'table_style'}>
            <thead>
            <tr>
              <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                Subcategory no.
              </th>
              <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                Subcategory title
              </th>
              <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                Subcategory description
              </th>
              <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                Subcategory Parent
              </th>
              <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                Edit Subcategory
              </th>
              <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                Delete Subcategory
              </th>
            </tr>
            </thead>
            <tbody>
            {
              subcategories.data.map((subcategory, index)=>{
                return (
                    <tr key={subcategory.title + index}>
                      <td className={"border px-2 py-3 text-xs md:text-base text-slate-700"}>
                        {index + 1}
                      </td>
                      <td className={"border px-2 py-3 text-xs md:text-base text-slate-700"}>
                        {
                          subcategory.title
                        }
                      </td>
                      <td className={"border px-2 py-3 text-xs md:text-base text-slate-700"}>
                        {subcategory.description}
                      </td>
                      <td className={"border px-2 py-3 text-xs md:text-base text-slate-700"}>
                        {subcategory.category.title}
                      </td>

                      {/* Edit column */}

                      <td className={"border px-2 py-3 text-xs md:text-base text-slate-700 "}>
                        <div className={"flex-row-center"}>
                          <button className={"bg-green-500 text-white py-2 px-3 hover:bg-green-600 transition-all rounded-sm"}
                                  onClick={()=>{
                                    router.push(`/subcategory/insert?edit=${subcategory.id}`)
                                  }}>
                            <FontAwesomeIcon icon={faPencilAlt}/>
                            <span className={"ml-2"}>Edit</span>
                          </button>
                        </div>

                      </td>
                      <td className={"border px-2 py-3 text-xs md:text-base text-slate-700 "}>
                        <div className={"flex-row-center"}>
                          <button className={"bg-rose-500 text-white py-2 px-3 hover:bg-rose-600 transition-all rounded-sm"}
                                  onClick={()=>{
                                    setDeleteState([true, subcategory.id])
                                  }}>
                            <FontAwesomeIcon icon={faTrash}/>
                            <span className={"ml-2"}>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                )
              })
            }
            </tbody>
          </table>

        {/*  Navigator */}
         <PageNavigator data={subcategories} stateSetter={setSubcategories}/>
        </ContentBox>

      </>
  )
}

export default ViewSubCat

export async function getServerSideProps(){
  let data;
  await axios.get('subcategory').then(
      (res)=>{
        data = res.data
      }
  ).catch(err=>console.log(err))
  return {
    props: {
      data
    }
  }
}