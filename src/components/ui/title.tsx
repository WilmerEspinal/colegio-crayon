type Props = {
    text: string
}
const Title = ({ text }: Props) => {
    return (
        <section className="w-full h-12 flex items-center justify-center mb-5">
            <h2 className="text-2xl">{text}</h2>
        </section>

    )
}

export default Title