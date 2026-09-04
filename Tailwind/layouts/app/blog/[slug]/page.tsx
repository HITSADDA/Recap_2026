import { g } from "framer-motion/m";

export const revalidate = 100; // this will revalidate the page every 100 seconds for ISR (Incremental Static Regeneration)

export async function generateStaticParams() { // for SSG (Static Site Generation) we need to tell the framework what dynamic routes we have, so we will generate the static params for the dynamic route
    // this function will be called on build time and will generate the static params for the dynamic route
    // we will tell him what SLUGS  we have
    const data: any = await fetch(`https://jsonplaceholder.typicode.com/posts/`).then(res => res.json())
    const slugs = data.map((item: any) => ({'slug': item.id}))
    return slugs
}

export default async function Page({params}: {params: {slug: string}}){
    const {slug} = await params;
    const data: any = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`).then(res => res.json())
    console.log(data)
    return(
        <div className="">
            <h1 className="text-center">{data.title}</h1>
        </div>
    )
}