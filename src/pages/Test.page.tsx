import Algebra from "../assets/images/logoCourses/algebra.png";
import CardTest from "@/components/ui/card_test"
import Title from "@/components/ui/title"

const Test = () => {
    return (
        <section>
            <section className="w-full h-12 flex items-center justify-center mb-5">
                <Title text="Evalaciones II Semestre pendiente"/>
            </section>
            <section className="px-6">
                <CardTest title="Algebra" imgUrl={Algebra} />
                <CardTest title="Algebra" imgUrl={Algebra} />
            </section>
        </section>
    )
}

export default Test