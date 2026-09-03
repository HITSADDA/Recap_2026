export default function LoadingRing() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
            <h1 className="text-2xl font-bold">Loading...</h1>
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}