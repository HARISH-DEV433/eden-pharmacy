import { log } from "console";
import Image from "next/image";

const logo = "../images/assets/logo.svg"

const Navbar = () => {
    return(
        /*-------------------Navbar Starts------------------*/
        <div className="bg-white h-6 flex w-screen relative">
            <div className="absolute left-16">
                <Image src={logo} alt="logo" width={100} height={100} />
            </div>
        </div>
        /*-------------------Navbar ends--------------------*/
    )
}

export default Navbar;