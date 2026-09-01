export function NavBtn({
    text,
    handleClick
}: {
    text: string,
    handleClick: () => void
}){
    return(
        <button onClick={handleClick} className="w-12 h-6 bg-green-400 text-white cursor-pointer rounded-2xl ">
            {text}
        </button>
    )
}