import PageHeader from "../components/PageHeader";
import {
    faMapMarkerAlt,
    faPhoneSquare,
    faShoppingCart,
    faTable,
    faTachometerAlt,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DashboardBox from "../components/DashboardBox";
import Link from "next/link";
import Image from "next/image";
import ContentBox from "../components/ContentBox";

const Dashboard = ()=> {
    return (
        <>
            <PageHeader mainTitle={'Dashboard'} title={'Dashboard'} icon={faTachometerAlt}/>
            <div className={'flex flex-wrap justify-between xl:flex-nowrap px-4'}>
                <DashboardBox link={'/'}
                              icon={faTable}
                              title={'Pending Approval'}
                              upStyle={'bg-cyan-500 border border-cyan-300'}
                              bottomStyle={'text-cyan-400'}>
                    <div className={'flex mb-2 items-center'}>
                        <span>
                        0
                    </span>
                        <span className={'bg-amber-500 px-2 ml-1 py-2 md:text-sm rounded'}>
                        Proposals
                    </span>
                    </div>
                </DashboardBox>
                <DashboardBox link={'/'}
                              icon={faUsers}
                              title={'Users'}
                              upStyle={'bg-green-500 border border-green-300'}
                              bottomStyle={'text-green-400'}>
                    <div className={'flex mb-2 items-center'}>
                        658
                    </div>
                </DashboardBox>
                <DashboardBox link={'/'}
                              icon={faShoppingCart}
                              title={'Active Orders'}
                              upStyle={'bg-yellow-500 border border-yellow-300'}
                              bottomStyle={'text-yellow-400'}>
                    <div className={'flex mb-2 items-center'}>
                        2
                    </div>
                </DashboardBox>
                <DashboardBox link={'/'}
                              icon={faPhoneSquare}
                              title={'Support Requests'}
                              upStyle={'bg-rose-500 border border-rose-300'}
                              bottomStyle={'text-rose-400'}>
                    <div className={'flex mb-2 items-center'}>
                        0
                    </div>
                </DashboardBox>
            </div>
            <div className={'flex flex-wrap justify-center'}>
                <div className={'w-full xl:w-[70%]'}>
                    <ContentBox contentTitle={'Website Statistics'}>
                        <table className={'table-auto text-left border-collapse border border-slate-300 w-full'}>
                            <thead>
                            <tr>
                                <th className={'tableData'}>Summary:</th>
                                <th className={'tableData'}>Results:</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={'tableData'}>
                                    <Link href={'/'}>
                                        <a>
                                            <div className={' px-2 decoration-solid hover:underline decoration-rose-800'}>
                                                Open Support Requests
                                            </div>
                                        </a>
                                    </Link>
                                </td>
                                <td className={'tableData'}>
                                    <div className={'bg-green-500 p-1 rounded text-white w-6 h-6 flex items-center justify-center'}>
                                        0
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={'tableData'}>
                                    <Link href={'/'}>
                                        <a>
                                            <div className={' px-2 decoration-solid hover:underline decoration-rose-800'}>
                                                Proposals/Services Awaiting Approval
                                            </div>
                                        </a>
                                    </Link>
                                </td>
                                <td className={'tableData'}>
                                    <div className={'bg-green-500 p-1 rounded text-white w-6 h-6 flex items-center justify-center'}>
                                        0
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={'tableData'}>
                                    <Link href={'/'}>
                                        <a>
                                            <div className={' px-2 decoration-solid hover:underline decoration-rose-800'}>
                                                Buyer Requests Awaiting Approval
                                            </div>
                                        </a>
                                    </Link>
                                </td>
                                <td className={'tableData'}>
                                    <div className={'bg-green-500 p-1 rounded text-white w-6 h-6 flex items-center justify-center'}>
                                        0
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={'tableData'}>
                                    <Link href={'/'}>
                                        <a>
                                            <div className={' px-2 decoration-solid hover:underline decoration-rose-800'}>
                                                Referrals Awaiting Approval
                                            </div>
                                        </a>
                                    </Link>
                                </td>
                                <td className={'tableData'}>
                                    <div className={'bg-green-500 p-1 rounded text-white w-6 h-6 flex items-center justify-center'}>
                                        0
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ContentBox>
                </div>
                <div className={'md:w-[70%] w-[80%] lg:w-[50%] xl:w-[30%]'}>
                    <ContentBox contentTitle={'Profile Card'}>
                        <div className={'grid place-content-center mb-5'}>
                            <div className={'relative h-24 w-24 rounded-full overflow-hidden'}>
                                <Image src={'/adminLogo.png'} layout={'fill'} objectFit={'cover'}/>
                            </div>
                        </div>
                        <div className={'uppercase border-b border-slate-300 px-2'}>
                            <h5 className={'text-xl font-medium'}>
                                letworkbedone
                            </h5>
                            <div className={'mb-2'}>
                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                <span className={'ml-2'}>
                            Uganda
                       </span>
                            </div>
                        </div>
                        <div className={'py-5 px-2'}>
                    <span className={'bg-green-500 text-white p-1 rounded'}>
                        ADMIN
                    </span>
                        </div>
                    </ContentBox>
                </div>
            </div>
        </>
    )
}

export default Dashboard
