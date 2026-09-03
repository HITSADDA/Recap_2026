import Link from "next/link";

export default async function Page() {
    // Can directly use server-side code here, like fetching data from a database or an API
    const users: any[] = [];

    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if (res.ok) {
        users.push(...(await res.json()));
    }

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
            <h1 className="text-2xl font-bold">Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="border border-gray-300 p-4 m-2">
                        <Link href={`/example/users/${user.id}`} className="text-blue-500 hover:underline">
                            {user.name}
                        </Link>
                        <div>{user.website}</div>
                        <div>{user.email}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}