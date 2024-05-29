/* Horario
Mi Curso
Evaluaciones
Asistencia */
interface NavLink {
    Title: string;
    LinkTo: string;
}

export const navList: NavLink[] = [
    {
        Title: "Horario",
        LinkTo: "/crayon/horario"
    },
    {
        Title: "Curso",
        LinkTo: "/crayon/cursos"
    },
    {
        Title: "Evaluaciones",
        LinkTo: "/crayon/examenes"
    },
    {
        Title: "Asistencia",
        LinkTo: "/crayon/asistencia"
    }
];
