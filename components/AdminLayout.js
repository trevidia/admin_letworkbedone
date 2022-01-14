import {
    faBars,
    faBell, faBolt, faBook, faCalendar,
    faCog, faComments, faCube, faCubes, faEye, faFax,
    faFile, faFlag, faGift, faImages, faLanguage, faMoneyBill, faPhoneSquare,
    faPlug, faPowerOff, faRss, faStar, faTable,
    faTachometerAlt, faUniversalAccess, faUsers
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStackExchange} from "@fortawesome/free-brands-svg-icons";
import DashLink from "./DashLink";
import ProfileDropDown from "./ProfileDropDown";
import {useState} from "react";
import LanguageSelector from "./LanguageSelector";

const AdminLayout = ({children}) => {
    const [isOpen, setIsOpen] = useState()

    return (
        <>
            <div className={" flex h-[100vh] w-full sm:overflow-hidden overflow-y-auto font-openSans flex-col sm:flex-row"}>
                <nav className={`w-full sm:w-[280px] px-4 bg-sideNav sm:overflow-y-auto transition-all sm:min-h-0 duration-[300ms] sm:max-h-screen  ${isOpen ? 'max-h-[2000px] min-h-[2000px]' : ' min-h-[64px] max-h-20 overflow-y-hidden'}`}>
                    <div
                        className={"text-xl w-full text-stone-100 flex sm:justify-center items-center mt-3 mb-4 sm:border-b border-stone-600 sm:pb-4"}>
                        <span>Letworkbedone</span>
                        <span className={"bg-green-600 p-1 rounded ml-2 font-semibold"}>ADMIN</span>
                        <div className={'sm:hidden text-stone-100 ml-auto cursor-pointer'} onClick={()=>isOpen ? setIsOpen(false) : setIsOpen(true)}>
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                    </div>

                    <ul className={"mt-12 text-slate-300  text-[14px] pb-20 pl-2"}>
                        <li>
                            <DashLink
                                linkTitle={'Dashboard'}
                                icon={faTachometerAlt} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Settings'}
                                subLinks={[
                                    {
                                        title: "General Settings",
                                        path: '/settings/general_settings'
                                    },
                                    // Layout settings removed
                                    {
                                        title: "Payment Settings",
                                        path: '/'
                                    },
                                    {
                                        title: "Exchange Rate Settings",
                                        path: '/'
                                    },
                                    {
                                        title: "Mail Server Settings",
                                        path: '/'
                                    },
                                    {
                                        title: "Email Templates",
                                        path: '/'
                                    },
                                    {
                                        title: "Api Settings",
                                        path: '/'
                                    },
                                    {
                                        title: "Application Update",
                                        path: '/'
                                    },
                                ]}
                                icon={faCog}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Plugins'}
                                icon={faPlug} link={'/'}
                                specialClass={'rotate-45'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Pages'}
                                subLinks={[
                                    {
                                        title: "View Pages",
                                        path: '/'
                                    },
                                    {
                                        title: "Insert Page",
                                        path: '/'
                                    }
                                ]}
                                icon={faFile} />
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Blog'}
                                subLinks={[
                                    {
                                        title: "Categories",
                                        path: '/'
                                    },
                                    {
                                        title: "Posts",
                                        path: '/'
                                    },
                                    {
                                        title: "Comments",
                                        path: '/'
                                    }
                                ]}
                                icon={faRss}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Feedback'}
                                subLinks={[
                                    {
                                        title: "Ideas",
                                        path: '/'
                                    },
                                    {
                                        title: "Comments",
                                        path: '/'
                                    }
                                ]}
                                icon={faComments}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Proposals / Services'}
                                icon={faTable} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Accounting'}
                                subLinks={[
                                    {
                                        title: "Sales",
                                        path: '/'
                                    },
                                    {
                                        title: "Expenses",
                                        path: '/'
                                    }
                                ]}
                                icon={faCube} />
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Payouts'}
                                subLinks={[
                                    {
                                        title: "Pending",
                                        path: '/'
                                    },
                                    {
                                        title: "Declined",
                                        path: '/'
                                    },
                                    {
                                        title: "Completed",
                                        path: '/'
                                    }
                                ]}
                                icon={faMoneyBill}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Reports / Abuses'}
                                subLinks={[
                                    {
                                        title: 'Order Reports',
                                        path: '/'
                                    },
                                    {
                                        title: 'Message Reports',
                                        path: '/'
                                    },
                                    {
                                        title: 'Proposal Reports',
                                        path: '/'
                                    }
                                ]}
                                icon={faFlag}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Inbox Messages'}
                                icon={faComments} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Reviews'}
                                subLinks={[
                                    {
                                        title: 'Insert Review',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Review',
                                        path: '/'
                                    }
                                ]}
                                icon={faStar} />
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Buyer Requests'}
                                icon={faTable} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Restricted Words'}
                                subLinks={[
                                    {
                                        title: 'Insert Word',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Words',
                                        path: '/'
                                    }
                                ]}
                                icon={faFax} />
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Alerts'}
                                icon={faBell} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Categories'}
                                subLinks={[
                                    {
                                        title: 'Insert Category',
                                        path: '/category/insert'
                                    },
                                    {
                                        title: 'View Categories',
                                        path: '/category'
                                    }
                                ]}
                                icon={faCubes} />
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Sub Categories'}
                                subLinks={[
                                    {
                                        title: 'Insert Sub Category',
                                        path: '/subcategory/insert'
                                    },
                                    {
                                        title: 'View Sub Categories',
                                        path: '/subcategory'
                                    }
                                ]}
                                icon={faStackExchange} />
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Attributes'}
                                subLinks={[
                                    {
                                        title: 'Insert Attribute',
                                        path: '/attribute/insert'
                                    },
                                    {
                                        title: 'View Attribute',
                                        path: '/attribute'
                                    }
                                ]}
                                icon={faStackExchange}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Delivery Times'}
                                subLinks={[
                                    {
                                        title: 'Insert Delivery Time',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Delivery Time',
                                        path: '/'
                                    }
                                ]}
                                icon={faCalendar} />
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Seller Languages'}
                                subLinks={[
                                    {
                                        title: 'Insert Seller Language',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Seller Languages',
                                        path: '/'
                                    }
                                ]}
                                icon={faLanguage}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Seller Skills'}
                                subLinks={[
                                    {
                                        title: 'Insert Seller Skill',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Seller Skill',
                                        path: '/'
                                    }
                                ]}
                                icon={faBolt}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Seller Levels'}
                                icon={faBell} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Customer Support'}
                                subLinks={[
                                    {
                                        title: 'Support Settings',
                                        path: '/'
                                    },
                                    {
                                        title: 'Support Requests',
                                        path: '/'
                                    },
                                    {
                                        title: 'Insert Enquiry Type',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Enquiry Types',
                                        path: "/"
                                    }
                                ]}
                                icon={faPhoneSquare} />
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Coupons'}
                                subLinks={[
                                    {
                                        title: 'Insert Coupon',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Coupons',
                                        path: '/'
                                    }
                                ]}
                                icon={faGift}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Slides'}
                                subLinks={[
                                    {
                                        title: 'Insert Slide',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Slides',
                                        path: '/'
                                    }
                                ]}
                                icon={faImages} />
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Terms & Conditions'}
                                subLinks={[
                                    {
                                        title: 'Insert Term',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Terms',
                                        path: '/'
                                    }
                                ]}
                                icon={faTable}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'All Users'}
                                icon={faUsers} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'View Orders'}
                                icon={faEye} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'View Referrals'}
                                icon={faUniversalAccess} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'View Proposal Referrals'}
                                icon={faUniversalAccess} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Files'}
                                subLinks={[
                                    {
                                        title: 'Proposal Files',
                                        path: '/'
                                    },
                                    {
                                        title: 'Message Files',
                                        path: '/'
                                    },
                                    {
                                        title: 'Orders Files',
                                        path: '/'
                                    }
                                ]}
                                icon={faFile}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Knowledge Bank'}
                                subLinks={[
                                    {
                                        title: 'Insert Article Category',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Article Categories',
                                        path: '/'
                                    },
                                    {
                                        title: 'Insert Article',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Articles',
                                        path: '/'
                                    }
                                ]}
                                icon={faBook}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Site Currencies'}
                                subLinks={[
                                    {
                                        title: 'Insert Currency',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Currencies',
                                        path: '/'
                                    }
                                ]}
                                icon={faMoneyBill} link={'/'}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Languages'}
                                subLinks={[
                                    {
                                        title: 'Insert Language',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Languages',
                                        path: '/'
                                    }
                                ]}
                                icon={faLanguage}/>
                        </li>
                        <li>
                            <DashLink
                                linkTitle={'Admins'}
                                subLinks={[
                                    {
                                        title: 'Admin Logs',
                                        path: '/'
                                    },
                                    {
                                        title: 'Insert Admin',
                                        path: '/'
                                    },
                                    {
                                        title: 'View Admins',
                                        path: '/'
                                    },
                                    {
                                        title: 'Edit My Profile',
                                        path: '/admins/profile'
                                    }
                                ]}
                                icon={faUsers}/>
                        </li>
                        <li>
                            <div className={'flex py-3 group hover:text-slate-100 cursor-pointer  transition-all'}>
                                <div className={'w-[55px] group-hover:text-slate-100 transition-all text-slate-500'}>
                                    <FontAwesomeIcon icon={faPowerOff}/>
                                </div>
                                <span>Logout</span>
                            </div>
                        </li>
                    </ul>
                </nav>
                <main className={"bg-background panel mx-0 sm:h-[100vh] sm:overflow-y-auto"}>
                    <div className={"bg-white  h-16 px-12 flex items-center justify-end shadow-md"}>
                        <ProfileDropDown
                            adminUsername={'Letworkbedone'}
                        />
                    </div>
                    {
                        children
                    }
                    <LanguageSelector/>
                </main>
            </div>
        </>
    )
}

export default AdminLayout;