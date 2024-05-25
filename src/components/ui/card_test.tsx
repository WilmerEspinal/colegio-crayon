import { Button } from "@/components/ui/button"
type Props = {
    title: string,
    imgUrl: string,
}
const CardTest = ({title,imgUrl}:Props) => {
    return (
        <div className="w-full bg-white px-3 rounded py-2 mb-4">
            <h5 className="text-xl">{title}</h5>
            <img className=" w-40 my-2" src={imgUrl} alt="" />
            <Button>Realizar evealuación</Button>
        </div>
    )
}
export default CardTest