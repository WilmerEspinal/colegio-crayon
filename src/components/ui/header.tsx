import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoNotifications } from "react-icons/io5";
import LogoCrayon from "../../assets/images/logo-crayon.png";
import UserMenu from "./user_menu/user_menu";



const Header = () => {
    return (
        <header className="w-full h-16 bg-orange-500 flex justify-between items-center">
            <div>
                <img className=" w-2/5" src={LogoCrayon} alt="" />
            </div>
            <div className="flex items-center">
                <div className="flex items-center cursor-pointer mr-3">
                    <div className="mr-1">
                        <h3>Jorge Armando Ordoñez Pauccca</h3>
                        <p className="text-right">Estudiante</p>
                    </div>
                    <Avatar>
                        <AvatarImage src="#" />
                        <AvatarFallback>JO</AvatarFallback>
                    </Avatar>
                </div>
                <IoNotifications className="text-2xl" />
            </div>
            {/* <UserMenu/> */}
        </header>
    )
}

export default Header