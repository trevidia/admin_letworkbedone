import {faStackExchange} from "@fortawesome/free-brands-svg-icons";
import PageBody from "../../components/PageBody";
import axios from "../../lib/AxiosConfig"
import {useState} from "react";
import PageNavigator from "../../components/PageNavigator";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faPlusCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import LoadingComponent from "../../components/LoadingComponent";
import {useRouter} from "next/router";
import Link from "next/link";

const ViewAttributes = ({attributes})=>{
    const [data, setData] = useState(attributes)
    const [loading, setLoading] = useState(false)
    const [deleteState, setDeleteState] = useState([false, 0])
    const router = useRouter();


    return <PageBody
        pageHeading={ <Link href={"/attribute/insert"}>
            <a>
                <div className={"bg-green-600 text-[16px] py-2 px-3 hover:bg-emerald-600 transition-all text-white"}>
                    <FontAwesomeIcon icon={faPlusCircle}/>
                    <span className={"ml-2"}>
                      Add Attribute
                  </span>
                </div>
            </a>
        </Link>}
        mainPageTitle={"Attributes"}
        contentBoxTitle={"View All Attributes"} icon={faStackExchange}>
        {
            loading && <LoadingComponent/>
        }
        {
            deleteState[0] &&   <div className={"fixed h-screen inset-x-0 top-0 grid place-content-center bg-black bg-opacity-20 z-20"}>
                <div className={" h-[200px] bg-white rounded-md w-[300px] px-3 py-2"}>
                    <div className={"h-2/3 w-full flex items-center text-center"}>
                      <span className={'uppercase text-red-500'}>
                      Are you sure you want to delete this attribute
                      </span>
                    </div>
                    <div className={"flex items-center justify-between px-4 h-1/3"}>
                        <button
                            onClick={()=>{
                                const deleteCat = async () => {
                                    setLoading(true)
                                    await axios.post(`/package_spec`,{ package_id: deleteState[1]}).then(
                                        (res)=>{
                                            setData(res.data)
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
        <table className={'table_style'}>
            <thead>
            <tr>
                <th className={"table_head tableData"}>
                    Attribute no.
                </th>
                <th className={"table_head tableData"}>
                    Attribute Name
                </th>
                <th className={"table_head tableData"}>
                    Category Name
                </th>
                <th className={"table_head tableData"}>
                    Subcategory Name
                </th>
                <th className={"table_head tableData"}>
                    Attribute Input
                </th>
                <th className={"table_head tableData"}>
                    Attribute Extra Title
                </th>
                <th className={"table_head tableData"}>
                    Edit Attribute
                </th>
                <th className={"table_head tableData"}>
                    Delete Attribute
                </th>
            </tr>
            </thead>
            <tbody>
            {
                data.data.map((el, index)=>{
                    return (
                        <tr key={el.specification + index}>
                            <td className={"tableData text-[12px]"}>
                                {index + 1}
                            </td>
                            <td className={'tableData text-[12px]'}>
                                {el.specification}
                            </td>
                            <td className={'tableData text-[12px]'}>
                                {el.sub_category.category.title}
                            </td>
                            <td className={'tableData text-[12px]'}>
                                {el.sub_category.title}
                            </td>
                            <td className={'tableData text-[12px]'}>
                                {el.type}
                            </td>
                            <td className={'tableData text-[12px]'}>
                                {el.extra_spec_title}
                            </td>
                            <td className={'tableData text-[12px]'}>
                                <div className={"flex-row-center"}>
                                    <button className={"bg-green-500 text-white py-2 px-3 hover:bg-green-600 transition-all rounded-sm"}
                                            onClick={()=>{
                                                router.push(`/attribute/insert?edit=${el.id}`)
                                            }}>
                                        <FontAwesomeIcon icon={faPencilAlt}/>
                                        <span className={"ml-2"}>Edit</span>
                                    </button>
                                </div>
                            </td>
                            <td className={'tableData text-[12px]'}>
                                <div className={"flex-row-center"}>
                                    <button className={"bg-rose-500 text-white py-2 px-3 hover:bg-rose-600 transition-all rounded-sm"}
                                            onClick={()=>{
                                                setDeleteState([true, el.id])
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
        <PageNavigator data={data} stateSetter={setData}/>
    </PageBody>
}

export default ViewAttributes

export const getServerSideProps = async ()=>{
    let attributes;
    await axios.get("/package_spec").then((res)=>{
        attributes = res.data
        // console.log(res.data)
    }).catch(err=>console.log(err))
    return {
        props: {
            attributes
        }
    }
}