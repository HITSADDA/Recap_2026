"use client";

import { useEffect, useState } from "react";

export default function ClientComponentPage() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Client component mounted");
    }, []);
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Client Component Page</h1>
      <p>This is a client component page.</p>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}