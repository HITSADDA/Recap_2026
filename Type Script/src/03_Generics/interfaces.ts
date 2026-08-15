interface ApiResponse<T>{
    statusCode: number;
    data: T;
}

const resp: ApiResponse<{username: string}> = {
    statusCode: 201,
    data: {
        username: "John Doe"
    }
}