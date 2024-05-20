import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoNotifications } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import LogoCrayon from "../assets/images/logo-crayon.png";

const VirtualClassroom = () => {
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
              <AvatarImage src="https://scontent.flim21-2.fna.fbcdn.net/v/t39.30808-6/391695018_289398060576483_340056168517553467_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH3z95J6mXc_XE26ZkbfP4OFbxU6DVBG94VvFToNUEb3pwLKlhHUfcgNDfbUdOK9SIruMnFGcOno8-zf6E8H3dp&_nc_ohc=rI1QtegiIsAQ7kNvgEIKPl0&_nc_zt=23&_nc_ht=scontent.flim21-2.fna&oh=00_AYDF9ZbXHuGeSz8HZRJC_KyK0agzz0SGthW1clDj5bdEJg&oe=6644619D" />
              <AvatarFallback>JO</AvatarFallback>
            </Avatar>
          </div>
          <IoNotifications className="text-2xl" />
        </div>
      </header>
      <main className="w-full h-screen">
        <section className="flex">
          <section className="w-48 h-screen bg-white">
            <nav className="mt-1">
              <ul className="flex flex-col">
                <Link className="text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-indigo-500 duration-300 py-2" to="/horario">Horario</Link>
                <Link className="text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-indigo-500 duration-300 py-2" to="/cursos">Mi Curso</Link>
                <Link className="text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-indigo-500 duration-300 py-2" to="/examenes">Evaluaciones</Link>
                <Link className="text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-indigo-500 duration-300 py-2" to="/asistencia">Asistencia</Link>
              </ul>
            </nav>
          </section>
          <section className="w-full bg-slate-300">
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};

export default VirtualClassroom;
