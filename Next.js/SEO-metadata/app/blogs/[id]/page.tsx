import { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    return data.map((post: any) => ({ id: String(post.id) }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> },
    parent: ResolvingMetadata): Promise<Metadata> {
    const { id } = await params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());

    // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

    return {
        title: data.title,
        description: data.body,
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

    const { id }: { id: string } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
        return (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
                <h1 className="text-2xl font-bold">Error loading post</h1>
            </div>
        );
    }

    // Parse the response into JSON
    const data = await res.json();

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
            <h1 className="text-2xl font-bold">Post</h1>
            {data && (
                <div className="border border-gray-300 p-4 m-2">
                    <div className="font-bold">{data.title}</div>
                    <div>{data.body}</div>
                    <div>{data.userId}</div>
                </div>
            )}
        </div>
    )
}