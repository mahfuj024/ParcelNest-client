import { useNavigate } from 'react-router'
import logo from "../../assets/logo.png"

function Logo() {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate("/")} className="flex items-center cursor-pointer">
            <img src={logo} alt="logo" />
            <h1 className="text-2xl lg:text-3xl font-bold mt-7 -ml-3">ParcelNest</h1>
        </div>
    )
}

export default Logo