import Link from "next/link";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <ul className="">
                <li className="hover:underline"><Link href="/blog/1">Blog 1</Link></li>
                <li className="hover:underline"><Link href="/blog/2">Blog 2</Link></li>
                <li className="hover:underline"><Link href="/blog/3">Blog 3</Link></li>
            </ul>
            {children}
        </div>
    )}