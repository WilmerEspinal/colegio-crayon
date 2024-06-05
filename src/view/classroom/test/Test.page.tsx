import CardTest from "@/components/ui/card_test";
import Title from "@/components/ui/title";
import Algebra from "../../../assets/images/logoCourses/algebra.png";

const Test = () => {
    return (
        <section>
            <Title text="Evalaciones II Semestre pendiente" />
            <section className="px-6">
                <CardTest title="Algebra" imgUrl={Algebra} />
                <CardTest title="Algebra" imgUrl={Algebra} />
            </section>
        </section>
    )
}

export default Test