//IMAGENES
import Algebra from "../../../assets/images/logoCourses/algebra.png";
import Aritmetica from "../../../assets/images/logoCourses/aritmetica.png";
import Biologia from "../../../assets/images/logoCourses/biologia.png";
import civica from "../../../assets/images/logoCourses/civica.png";
import EdFisica from "../../../assets/images/logoCourses/ed-fisica.png";
import Fisica from "../../../assets/images/logoCourses/fisica.png";
import Geometria from "../../../assets/images/logoCourses/geometria.png";
import Ingles from "../../../assets/images/logoCourses/ingles.png";
import Lenguaje from "../../../assets/images/logoCourses/lenguaje.png";
import Literatura from "../../../assets/images/logoCourses/literatura.png";
import Quimica from "../../../assets/images/logoCourses/quimica.png";
import RazMatematico from "../../../assets/images/logoCourses/raz-mate.png";
import RobotComput from "../../../assets/images/logoCourses/rob-cumpu.png";
import Trigonometria from "../../../assets/images/logoCourses/trigonometria.png";
import Tutoria from "../../../assets/images/logoCourses/tutoria.png";

//MODELO
interface Course {
    title: string;
    description: string;
    imgUrl: string
}


export const CourseList: Course[] = [
    {
        title: "ÁLGEBRA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Algebra}`
    },
    {
        title: "ARITMÉTICA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Aritmetica}`
    },
    {
        title: "BIOLOGÍA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Biologia}`
    },
    {
        title: "CÍVICA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${civica}`
    },
    {
        title: "EDUC. FÍSICA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${EdFisica}`
    },
    {
        title: "FÍSICA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Fisica}`
    },
    {
        title: "GEOMETRÍA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Geometria}`
    },
    {
        title: "INGLÉS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Ingles}`
    },
    {
        title: "LENGUAJE",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Lenguaje}`
    },
    {
        title: "LITERATURA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Literatura}`
    },
    {
        title: "QUÍMICA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Quimica}`
    },
    {
        title: "RAZ, MATEMÁT",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${RazMatematico}`
    },
    {
        title: "ROBÓT. COMPUT.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${RobotComput}`
    },
    {
        title: "TRIGONOMETRÍA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Trigonometria}`
    },
    {
        title: "TUTORÍA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore dignissimos labore dolores a autem explicabo beatae eius architecto sed",
        imgUrl: `${Tutoria}`
    }
]