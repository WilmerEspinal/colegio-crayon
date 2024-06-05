import Card from "@/components/ui/card";
import Title from "@/components/ui/title";
import { CourseList } from "./course";


const Course = () => {
    return (
        <section className="">
            <Title text="Mis Cursos" />
            <section className="p-3 flex justify-center flex-wrap gap-3">

                {
                    CourseList.map((item, index) => (
                        <Card key={index} title={item.title} urlImage={item.imgUrl} description={item.description} />
                    ))
                }
                {/* <Card urlImage={RazMatematico} title="RAZ, MATEMÁT" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." />
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
                <Card urlImage={EdFisica} title="EDUC. FÍSICA" description="desarrolla habilidades para expresar y entender ideas claramente, mejorando la interacción verbal y escrita de manera efectiva." /> */}
            </section>
        </section>
    )
}
export default Course