import { Link } from "react-router-dom"
type Props = {
    nameLink: string
    namePath: string
}
const NavBarLeft = ({ nameLink, namePath }: Props) => {
    return (
        <>
            <Link className="text-xl transition hover:-translate-y-1 hover:bg-indigo-500 py-2" to={namePath}>
                {nameLink}
            </Link>
        </>
    )

}

export default NavBarLeft