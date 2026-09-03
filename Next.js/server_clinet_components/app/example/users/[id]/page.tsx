"use client"

import { use, useEffect, useState } from "react";
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());


export default function Page({ params }: { params: Promise<{ id: string }> }) {
    // const [user, setUser] = useState<any>(null);
    // const {id}: { id: string } = use<{ id: string }>(params);
    // useEffect(() => {
        //     const fetchUser = async () => {
            //         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            //         if (res.ok) {
                //             setUser(await res.json());
                //         }
                //     };
                //     fetchUser();
                // }, [])
                
    const {id}: { id: string } = use<{ id: string }>(params);

    const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher);

    if(error){
        return <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
            <h1 className="text-2xl font-bold">Error loading user</h1>
        </div>
    }

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
            <h1 className="text-2xl font-bold">User</h1>
            {data && (
                <div className="border border-gray-300 p-4 m-2">
                    <div className="font-bold">{data.name}</div>
                    <div>{data.website}</div>
                    <div>{data.email}</div>
                </div>
            )}
        </div>
    )
}