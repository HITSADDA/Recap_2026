import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className=" bg-slate-400 text-black w-full text-center">
            <div className="">Footer</div>
        </footer>
    )
}

export const Header = () => {
    return (
        <nav className="flex gap-2 bg-slate-400 text-black font-bold cursor-pointer items-center text-center w-full">
            <Link to="/">Index</Link>
            <Link to="/home">Home</Link>
            <Link to="/get-data">Get Data</Link>
        </nav>
    )
}