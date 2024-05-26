import { Link } from "react-router-dom"
import { buttonVariants } from "./button"

type Props = {
    title: string,
    imgUrl: string,
}
const CardTest = ({ title, imgUrl }: Props) => {
    return (
        <div className="w-full bg-white px-3 rounded py-2 mb-4">
            <h5 className="text-xl">{title}</h5>
            <img className=" w-40 my-2" src={imgUrl} alt="" />
            <Link to="/" className={`${buttonVariants({ variant: "outline" })} bg-indigo-700 hover:bg-indigo-600 hover:text-white text-white w-40`}>Realizar evaluación</Link>
        </div>
    )
}
export default CardTest