export default async function Home() {
    // Simulate a delay to demonstrate the loading state
    await new Promise((resolve) => setTimeout( resolve, 2000));

    // simulating error
    if(Math.random() < 0.5) {
        throw new Error("Random error occurred!");
    }
    
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="font-bold text-xl">Welcome to the blog page</h1>
        </div>
    );
    
}