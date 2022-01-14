import PageHeader from "../../components/PageHeader";
import {faCubes, faPencilAlt, faPlusCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import ContentBox from "../../components/ContentBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import axios from "../../lib/AxiosConfig"
import {useRouter} from "next/router";
import {useState} from "react";
import LoadingComponent from "../../components/LoadingComponent";

const Category = ({data}) => {
    const router = useRouter();
    const [categories, setCategories] = useState(data)
    const [deleteState, setDeleteState] = useState([false, 0])
    const [loading, setLoading] = useState(false)

  return (
      <>
          {
              loading && <LoadingComponent/>
          }
          {
              deleteState[0] &&   <div className={"fixed h-screen inset-x-0 top-0 grid place-content-center bg-black bg-opacity-20 z-20"}>
                  <div className={" h-[200px] bg-white rounded-md w-[300px] px-3 py-2"}>
                      <div className={"h-2/3 w-full flex items-center text-center"}>
                      <span className={'uppercase text-red-500'}>
                      Are you sure you want to delete this category
                      </span>
                      </div>
                      <div className={"flex items-center justify-between px-4 h-1/3"}>
                          <button
                              onClick={()=>{
                              const deleteCat = async () => {
                                  setLoading(true)
                                await axios.delete(`/category/${deleteState[1]}`).then(
                                    (res)=>{
                                        let category = categories.filter((cat)=>{
                                            if (cat.id !== deleteState[1]) {
                                                return cat
                                            }
                                            }
                                        )
                                        setCategories(category)
                                        setDeleteState([false, 0])
                                        setLoading(false)
                                    }
                                ).catch(err=>{
                                    setLoading(false)
                                })
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
          <PageHeader mainTitle={'Categories'} title={
              <Link href={"/category/insert"}>
                  <a>
              <div className={"bg-green-600 text-[16px] py-2 px-3 hover:bg-emerald-600 transition-all text-white"}>
                  <FontAwesomeIcon icon={faPlusCircle}/>
                  <span className={"ml-2"}>
                      Add Category
                  </span>
              </div>
                  </a>
              </Link>
          } icon={faCubes}/>
          <ContentBox contentTitle={'View All Categories'}>
              <table className={'border-collapse w-full text-left border border-slate-300 table-fixed'}>
                  <thead>
                  <tr>
                      <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                          Category no.
                      </th>
                      <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                          Category title
                      </th>
                      <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                          Category description
                      </th>
                      <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                          Edit Category
                      </th>
                      <th className={"font-normal text-xs md:text-md lg:text-lg text-slate-900 px-2 border border-slate-300 py-3"}>
                          Delete Category
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                      categories.map((category, index)=>{
                          return (
                              <tr key={category.title + index}>
                                  <td className={"border px-2 py-3 text-xs md:text-base text-slate-700"}>
                                      {index + 1}
                                  </td>
                                  <td className={"border px-2 py-3 text-xs md:text-base text-slate-700"}>
                                      {
                                          category.title
                                      }
                                  </td>
                                  <td className={"border px-2 py-3 text-xs md:text-base text-slate-700"}>
                                      {category.short_description}
                                  </td>
                                  <td className={"border px-2 py-3 text-xs md:text-base text-slate-700 "}>
                                      <div className={"flex items-center justify-center"}>
                                          <button className={"bg-green-500 text-white py-2 px-3 hover:bg-green-600 transition-all rounded-sm"}
                                                  onClick={()=>{
                                                      router.push(`/category/insert?edit=${category.id}`)
                                                  }}>
                                              <FontAwesomeIcon icon={faPencilAlt}/>
                                              <span className={"ml-2"}>Edit</span>
                                          </button>
                                      </div>

                                  </td>
                                  <td className={"border px-2 py-3 text-xs md:text-base text-slate-700 "}>
                                      <div className={"flex items-center justify-center"}>
                                          <button className={"bg-rose-500 text-white py-2 px-3 hover:bg-rose-600 transition-all rounded-sm"}
                                                  onClick={()=>{
                                                      setDeleteState([true, category.id])
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
          </ContentBox>

      </>
  )
}

export default Category

export async function getServerSideProps(){
    let data;
    await axios.get('categories').then(
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