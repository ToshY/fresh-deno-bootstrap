import { Head } from "$fresh/runtime.ts";

export default function Error500() {
    return (
        <>
            <Head>
                <title>500 - Internal server error</title>
            </Head>
            <div className="container-fluid py-2">
                <div class="px-4 py-8 mx-auto bg-[#86efac]">
                    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                        <h1 class="text-4xl font-bold">500 - Internal server error</h1>
                        <p class="my-4">
                            An error occurred while accessing the page.
                        </p>
                        <a href="/" class="underline">Go back home</a>
                    </div>
                </div>
            </div>
        </>
    );
}
