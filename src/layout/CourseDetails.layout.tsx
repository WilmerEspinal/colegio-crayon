import Header from "@/components/ui/header"
import NavBarLeft from "@/components/ui/navlink_left"
import { Outlet } from "react-router-dom"

const CourseDetails = () => {
    return (
        <>
            <Header />
            <section className="w-full h-screen bg-red-300">
                <section className="flex">
                    <section className="w-48 h-screen bg-white">
                        <h3 className="text-2xl font-medium mb-2">Comunicación</h3>
                        <nav>
                            <ul className="flex flex-col">
                                <NavBarLeft nameLink="Semestre I" namePath="/cursos/detalles/semestre-1" />
                                <NavBarLeft nameLink="Semestre II" namePath="/cursos/detalles/semestre-2" />
                                <NavBarLeft nameLink="Semestre III" namePath="/cursos/detalles/semestre-3" />
                            </ul>
                        </nav>
                    </section>
                    <section className="w-full bg-slate-300">
                        <Outlet />
                    </section>
                </section>
            </section>
        </>
    )
}
export default CourseDetails