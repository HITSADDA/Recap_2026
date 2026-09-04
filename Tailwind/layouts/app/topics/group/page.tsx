// group Marker allows to change the Children's style based on the state of the Parernt component.
export default function Page(){
    return (
        <div className="content-center w-full h-screen flex flex-col items-center justify-center space-y-4">
            <button className="group bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                Group:-
                <span className="group-hover:block hidden"> - This is the group content</span>
            </button>
        </div>
    )
}