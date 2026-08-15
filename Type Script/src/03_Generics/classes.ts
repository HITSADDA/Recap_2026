class ApiResponse<T>{
    statusCode: number;
    private meta = "haid"
    data: T;
    constructor(statusCode: number, data: T){
        this.statusCode = statusCode;
        this.data = data;
    }
}

const resp = new ApiResponse<{username: string;}>(201, {username: "vishal Singh"})

console.log(resp)