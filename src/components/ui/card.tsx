import { buttonVariants } from "@/components/ui/button";
type Props = {
    urlImage: string,
    title: string,
    description: string
}


import { Link } from "react-router-dom";
const Card = ({ urlImage, title, description }: Props) => {
    return <div className=" w-72 border bg-slate-50 rounded shadow-md shadow-indigo-200 p-2">
        <img className="max-h-40 w-full object-cover rounded" src={urlImage} alt="" />
        <div className="mb-3">
            <h6 className=" text-xl text-indigo-700 font-medium">{title}</h6>
            <p className="mb-3 leading-tight text-lg text-justify">{description}</p>
            <Link to="/cursos/detalles" className={`${buttonVariants({ variant: "outline" })} bg-indigo-700 hover:bg-indigo-600 hover:text-white text-white w-28`}>Ver</Link>
        </div>
    </div>
}

export default Card