import { useSignal } from "@preact/signals";
import {Button} from "../components/Button.tsx";

interface CounterProps {
    start: number
}

export default function Counter(props: CounterProps) {
    const count = useSignal(props.start);

    return (
        <div className="d-flex gap-4 py-3">
            <Button onClick={() => count.value -= 1} className={"btn btn-primary"}>-1</Button>
            <p className="fs-3" style="color: var(--bs-body-color);">{count}</p>
            <Button onClick={() => count.value += 1} className={"btn btn-primary"}>+1</Button>
        </div>
    );
}
