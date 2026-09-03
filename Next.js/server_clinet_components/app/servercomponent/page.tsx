export default async function Page() {
    const counter = 0;
    // Can directly use server-side code here, like fetching data from a database or an API

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
            <h1 className="text-2xl font-bold">Server Component Page</h1>
            <p>{counter}</p>
        </div>
    );
}