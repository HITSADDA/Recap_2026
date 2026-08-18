import axios from "axios"

export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

async function fetchData<T>(): Promise<T | []> {
    try {
        const res = await api.get<T>('/posts')
        return res.status === 200 ? res.data : []
    } catch (error: any) {
        console.log(error)
        throw new Error('Error in fetching api: ')
    }
}

export {
    fetchData
}