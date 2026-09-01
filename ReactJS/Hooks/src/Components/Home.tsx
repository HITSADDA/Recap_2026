import { deletedData, fetchData } from "../config/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export const Home = () => {
    return <h1 className="">Home Page</h1>
}

type Posts = {
    [key: string]: string | number
}

export const GetData = () => {
    const [pageNumber, setPageNumber] = useState<number>(1);

    const { data, isPending, isError } = useQuery<Posts[]>({
        queryKey: ['posts', pageNumber], // State: Consider As and other params than considered for trigger the call or rerender when changes like pageNumber
        queryFn: () => fetchData(pageNumber), // UseEffect: Consider As
        // gcTime: 10000, // Optional: Garbage Collection Time in "neno second"
        // staleTime: 20000, //
        // refetchInterval: 3000, // Polling in every 2000, when we switch the page it stops the fetching
        // refetchIntervalInBackground: true, // BY Default : False, allows to fetch event if on other page
    })

    const queryClient = useQueryClient()

    const handleDeletedSuccess = (data: any, id: any) => {
        alert(`Post Deleted successfully ${JSON.stringify(data)} ${id}`)

        queryClient.setQueriesData<Posts[]>(
            { queryKey: ['posts', pageNumber] },
            (curElem) => curElem?.filter((data) => data.id !== id))
    }
    
    const handleDeletedFailure = (data: any, id: any) => {
        alert(`Post Deleted Failed: ${JSON.stringify(data)} ${id}`)
    }
    const handleSattled = (data: any, id: any) => {
        alert(`Post Deleted Failed: ${JSON.stringify(data)} ${id}`)
    }

    const deleteMutaion = useMutation({
        mutationFn: (id: number) => deletedData(id),
        onSuccess: handleDeletedSuccess,
        onError: handleDeletedFailure
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
                        <div className="bg-slate-600 items-center w-[80%] p-2 gap-2 flex flex-col">
                            <div className="]" key={index}>
                                {item.body}
                            </div>
                            <button onClick={() => deleteMutaion.mutate(Number(item.id))} className="bg-green-500 text-white rounded-md p-1 cursor-pointer">Delete</button>
                        </div>

                    ))}
                <div className="flex w-full justify-around pb-4  ">
                    <button disabled={pageNumber == 0} onClick={() => setPageNumber(prev => prev -= 1)} className="w-12 h-6 bg-green-400 text-white cursor-pointer rounded-2xl disabled:bg-amber-200"> Prev </button>
                    {pageNumber}
                    <button onClick={() => setPageNumber(prev => prev += 1)} className="w-12 h-6 bg-green-400 text-white cursor-pointer rounded-2xl "> Next </button>
                </div>
            </div>
        </>
    )
}

