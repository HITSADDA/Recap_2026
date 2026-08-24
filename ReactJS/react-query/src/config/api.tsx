import axios from "axios"

export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
})

// Older Version
// async function fetchData<T>(): Promise<T | []> {
//     try {
//         const res = await api.get<T>('/posts')
//         return res.status === 200 ? res.data : []
//     } catch (error: any) {
//         console.log(error)
//         throw new Error('Error in fetching api: ')
//     }
// }

async function fetchData<T>(pageNumber: number): Promise<T | []> {
    try {
        const res = await api.get<T>(`/posts/?_start=${(pageNumber * 3) + 1}&_limit=3`)
        return res.status === 200 ? res.data : []
    } catch (error: any) {
        console.log(error)
        throw new Error('Error in fetching api: ')
    }
}


async function deletedData<T>(id: number): Promise<T | []>{
    try {
        const res = await api.delete<T>(`/posts/${id}`)
        return res.data || []
    }  catch (error: any) {
        console.log(error)
        throw new Error('Error in delete api: ')
    }
}

export {
    fetchData,
    deletedData
}