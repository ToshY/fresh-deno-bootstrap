import {Head} from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home({data}: { data: any[] }) {
    return (
        <>
            <Head>
                <title>Index</title>
            </Head>
            <div className="container-fluid py-2">
                <p className="my-6">
                    Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
                    file, and refresh.
                </p>
                <Counter start={3}/>
            </div>
        </>
    );
}
