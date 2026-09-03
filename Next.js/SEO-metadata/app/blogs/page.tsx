import Link from "next/link";


export const metadata = {
  title: "Blogs | Vishal Singh Rajpurohit",
  description: "Learn how to use SEO metadata in Next.js",
};

export default async function Page() {
    // Can directly use server-side code here, like fetching data from a database or an API
    const users: any[] = [];

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (res.ok) {
        users.push(...(await res.json()));
    }

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
            <h1 className="text-2xl font-bold">Posts</h1>
            <ul>
                {users.map((post) => (
                    <li key={post.id} className="border border-gray-300 p-4 m-2">
                        <Link href={`/blogs/${post.id}`} className="text-blue-500 hover:underline">
                            {post.title}
                        </Link>
                        <div>{post.body}</div>
                        <div>{post.userId}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}