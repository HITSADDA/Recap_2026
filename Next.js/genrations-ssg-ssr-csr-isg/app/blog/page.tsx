import Link from "next/link"

export default async function Page(){
    const data: any[] = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    console.log(data)
    return(
        <div className="">
            <h2 className="text-center">Top Blogs</h2>
            <div className="">
                {
                    data.map((item, idx) =>(
                        <div key={idx} className="border p-2 m-2">
                            <Link href={`/blog/${item.id}`}>
                                <h3>{item.title}</h3>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}