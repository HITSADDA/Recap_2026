import { fetchData } from "../config/api"
import { useQuery } from "@tanstack/react-query"

export const Home = () => {
    return <h1 className="">Home Page</h1>
}

type Posts = {
    [key: string]: string | number
}

export const GetData = () => {
    const { data, isPending, isError } = useQuery<Posts[]>({
        queryKey: ['posts'], // State: Consider As
        queryFn: fetchData // UseEffect: Consider As
    })

    return (
        <>
            <h1 className="">Data Page</h1>
            {isPending && (
                <h1 className="text-red-700">
                    Loading.....
                </h1>
            )}

            {isError && (
                <h1 className="text-red-700">
                    !!!Error.....
                </h1>
            )}
            <div className="flex flex-col gap-2 items-center mt-10">
                {!isPending &&
                    !isError &&
                    data?.map((item, index) => (
                        <div className="bg-green-400 w-[80%]" key={index}>
                            {item.body}
                        </div>
                    ))}
            </div>
        </>
    )
}

