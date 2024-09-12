import { BiNews } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiGroup } from "react-icons/bi";
import { TfiPanel } from "react-icons/tfi";
import Dashboard from "../pages/Dashboard"
import Xodimlar from "../pages/Xodimlar";
import Applications from "../pages/Applications";
import News from "../pages/News";
import NewsPage from "../pages/NewsPage";
import AddNews from "../pages/AddNews";
import EditNews from "../pages/EditNews";

const routes = [
    {
        id: 1,
        element: <Dashboard />,
        path: "/",
        name: "Boshqaruv",
        icon: <TfiPanel />,
        hideSidebar: false
    },
    {
        id: 2,
        element: <Xodimlar />,
        path: "/staff",
        name: "Xodimlar",
        icon: <BiGroup />,
        hideSidebar: false
    },
    {
        id: 3,
        element: <Applications />,
        path: "/applications",
        name: "Arizalar",
        icon: <HiOutlineDocumentText />,
        hideSidebar: false
    },
    {
        id: 4,
        element: <News />,
        path: "/news",
        name: "Yangliklar",
        icon: <BiNews />,
        hideSidebar: false
    },
    {
        id: 5,
        element: <NewsPage />,
        path: "/news-page",
        hideSidebar: true
    },
    {
        id: 6,
        element: <AddNews />,
        path: "/news-mode",
        hideSidebar: true
    },
    {
        id: 7,
        element: <EditNews />,
        path: "/edit-news",
        hideSidebar: true
    }
]
export default routes