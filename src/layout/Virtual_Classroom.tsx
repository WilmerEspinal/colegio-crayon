import Header from "@/components/ui/header";
import { navList } from "@/functions/componetsFunction";
import { Link, Outlet } from "react-router-dom";

const VirtualClassroom: React.FC = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen">
        <section className="flex">
          <section className="w-48 h-screen bg-white">
            <section className="w-48 h-screen bg-white">
              <nav className="mt-1">
                <ul className="flex flex-col">

                  {
                    navList.map((item, index) => (
                      <Link key={index} className="text-xl transition hover:-translate-y-1 hover:bg-indigo-500 py-2" to={item.LinkTo}>
                        {item.Title}
                      </Link>
                    ))
                  }
                  {/* <Link className="text-xl transition hover:-translate-y-1 hover:bg-indigo-500 py-2" to="/cursos">
                    Mi Curso
                  </Link>
                  <Link className="text-xl transition hover:-translate-y-1 hover:bg-indigo-500 py-2" to="/examenes">
                    Evaluaciones
                  </Link>
                  <Link className="text-xl transition hover:-translate-y-1 hover:bg-indigo-500 py-2" to="/asistencia">
                    Asistencia
                  </Link> */}
                </ul>
              </nav>
            </section>
          </section>
          <section className="w-full bg-slate-300">
            <Outlet />
          </section>
        </section>
      </main>
    </>
  )
};


export default VirtualClassroom;
