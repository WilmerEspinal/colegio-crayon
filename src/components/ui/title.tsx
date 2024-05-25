type Props = {
    text: string
}
const Title = ({text}:Props) => {
    return (
        <h2 className="text-2xl">{text}</h2>
    )
}

export default Title