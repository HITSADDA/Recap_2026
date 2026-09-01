import { Outlet} from "react-router-dom"
import { Footer, Header } from "./Components/Templates/Templates"
export const Layout = () => {
    return (
        <>
            <div className="bg-slate-800 text-white w-full min-h-[100vh]">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}