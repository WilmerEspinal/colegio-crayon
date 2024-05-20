import Card from "@/components/ui/card";
import Algebra from "../assets/images/logoCourses/algebra.png";
import Aritmetica from "../assets/images/logoCourses/aritmetica.png";
import Biologia from "../assets/images/logoCourses/biologia.png";
import civica from "../assets/images/logoCourses/civica.png";
import EdFisica from "../assets/images/logoCourses/ed-fisica.png";
import Fisica from "../assets/images/logoCourses/fisica.png";
import Geometria from "../assets/images/logoCourses/geometria.png";
import Ingles from "../assets/images/logoCourses/ingles.png";
import Lenguaje from "../assets/images/logoCourses/lenguaje.png";
import Literatura from "../assets/images/logoCourses/literatura.png";
import Quimica from "../assets/images/logoCourses/quimica.png";
import RazMatematico from "../assets/images/logoCourses/raz-mate.png";
import RobotComput from "../assets/images/logoCourses/rob-cumpu.png";
import Trigonometria from "../assets/images/logoCourses/trigonometria.png";
import Tutoria from "../assets/images/logoCourses/tutoria.png";

const Course = () => {
    return (
        <section className="">
            <section className="w-full h-12 flex items-center justify-center mb-5">
                <h2 className="text-2xl"> Mis cursos Período 2024 </h2>
            </section>
            <section className="p-3 flex justify-center flex-wrap gap-3">
                <Card urlImage={Lenguaje} title="LENGUAJE" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={RazMatematico} title="RAZ, MATEMÁT" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={Algebra} title="ÁLGEBRA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={Quimica} title="QUÍMICA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={Ingles} title="INGLÉS" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={Tutoria} title="TUTORÍA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={Fisica} title="FÍSICA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={Trigonometria} title="TRIGONOMETRÍA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={civica} title="CÍVICA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={Literatura} title="LITERATURA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={Aritmetica} title="ARITMÉTICA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={RobotComput} title="ROBÓT. COMPUT." description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={Biologia} title="BIOLOGÍA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={Geometria} title="GEOGRAFÍA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
                <Card urlImage={EdFisica} title="EDUC. FÍSICA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
            </section>
            <p>razonamiento matemático</p>
        </section>
    )
}
export default Course