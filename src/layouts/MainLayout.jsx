import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function MainLayouts() {
    return (
        <div>
            <Navbar/>
            <Outlet /> {/* এখানে nested route content আসবে */}
            <Footer />
        </div>
    )
}

export default MainLayouts