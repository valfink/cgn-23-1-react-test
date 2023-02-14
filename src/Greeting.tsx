import {ReactElement} from "react";

type Props = {
    name: string
}

export default function Greeting(props: Props): ReactElement {
    return (
        <h1>Hello {props.name}</h1>
    )
}