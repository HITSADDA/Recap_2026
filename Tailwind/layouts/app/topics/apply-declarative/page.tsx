// @apply used when we want to wrap a repetative style like button etc in a single class name
// Globals.css

export default function Page() {
    return (
        <div className="content-center w-full h-screen flex flex-col items-center justify-center space-y-4">
            <button className="btn-blue">
                Button
            </button>
            <button className="btn-red">
                Button
            </button>   
        </div>
    )
}