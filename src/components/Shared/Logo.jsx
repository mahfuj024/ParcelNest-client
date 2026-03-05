import { useNavigate } from 'react-router'
import logo from "../../assets/logo.png"

function Logo() {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate("/")} className="flex items-center cursor-pointer py-2">
            <img src={logo} alt="logo" />
            <h1 className="text-2xl md:text-[27px] lg:text-[31px] font-bold mt-5 lg:mt-6 -ml-3">ParcelNest</h1>
        </div>
    )
}

export default Logo