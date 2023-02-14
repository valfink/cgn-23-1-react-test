type Props = {
    name: string
}

export default function Greeting(props: Props) {
    return (
        <h1>Hello {props.name}</h1>
    )
}