// import { AiFillAppstore, AiFillFileText } from "react-icons/ai"
import { FaFileExport, FaCloudDownloadAlt, FaFileAlt, FaShareAlt, FaThLarge} from "react-icons/fa"
// import { ImShare2 } from "react-icons/im"
export const sideData = [
    {
        id:1,
        icon: <FaThLarge className="h-6 w-6" />,
        text:"Overview",
        link:"/dashboard",
        addStyle:""
    },
    {
        id:2,
        icon: <FaFileAlt className="h-6 w-6" />,
        text:"Investment",
        link:"/dashboard",
        addStyle:"border-r border-white"
    },
    {
        id:3,
        icon: <FaFileExport className="h-6 w-6" />,
        text:"Transactions",
        link:"/dashboard",
        addStyle:"border-r border-white"
    },
    {
        id:4,
        icon: <FaShareAlt className="h-6 w-6" />,
        text:"Invite Friends",
        link:"/dashboard",
        addStyle:"border-r border-white"
    },
    {
        id:5,
        icon: <FaCloudDownloadAlt className="h-6 w-6" />,
        text:"Download Statement",
        link:"/dashboard",
        addStyle:"border-r border-white"
    },
    
]