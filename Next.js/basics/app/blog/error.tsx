"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        console.error(error);
        startTransition(() => {
            router.refresh();
        });
    }, [error, router]);

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="font-bold text-xl">Something went wrong!</h1>
            <p className="text-gray-500">Please try again later.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={reset}>
                Retry
            </button>
        </div>
    )
}