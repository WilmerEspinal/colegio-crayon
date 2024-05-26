import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoNotifications } from "react-icons/io5";
import { Link, Outlet, useLocation } from "react-router-dom";
import LogoCrayon from "../assets/images/logo-crayon.png";

const VirtualClassroom: React.FC = () => {
  //hook react useLocation obtiene el url
  const location = useLocation();
  //si el pathname es igual ejecuta esta condicional {!hideNav && <div>Hola</div> ()}
  const hideNav = location.pathname === '/cursos/detalles';

  return (
    <>
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
      </header>
      <main className="w-full h-screen">
        <section className="flex">
          {!hideNav && (
            <section className="w-48 h-screen bg-white">
              <section className="w-48 h-screen bg-white">
                <nav className="mt-1">
                  <ul className="flex flex-col">
                    <Link className="text-xl transition hover:-translate-y-1 hover:bg-indigo-500 py-2" to="/horario">
                      Horario
                    </Link>
                    <Link className="text-xl transition hover:-translate-y-1 hover:bg-indigo-500 py-2" to="/cursos">
                      Mi Curso
                    </Link>
                    <Link className="text-xl transition hover:-translate-y-1 hover:bg-indigo-500 py-2" to="/examenes">
                      Evaluaciones
                    </Link>
                    <Link className="text-xl transition hover:-translate-y-1 hover:bg-indigo-500 py-2" to="/asistencia">
                      Asistencia
                    </Link>
                  </ul>
                </nav>
              </section>
            </section>
          )}
          <section className="w-full bg-slate-300">
            <Outlet />
          </section>
        </section>
      </main>
    </>
  )
};


export default VirtualClassroom;
