export default function Page() {
    return (
        <section className="text-center">
            <h2 className="">Simple Grid | Equal laout</h2>
            <div className="grid m-4 gap-4 sm:grid-cols-4">
                <div className="w-auto min-h-[100px] bg-amber-300"></div>
                <div className="w-auto min-h-[100px] bg-red-300"></div>
                <div className="w-auto min-h-[100px] bg-white"></div>
                <div className="w-auto min-h-[100px] bg-blue-300"></div>
            </div>

            <h2 className="">Fraction Layout</h2>
            <div className="grid m-4 gap-4 grid-cols-2 sm:grid-cols-12">
                <div className="sm:col-span-2 w-auto min-h-[100px] bg-amber-300"></div>
                <div className="sm:col-span-10 w-auto min-h-[100px] bg-red-300"></div>
            </div>
        </section>
    )
}