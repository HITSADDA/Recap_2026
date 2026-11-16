export function globalMiddlware(err, _,resp, __){
    const statusCode = err?.statusCode || 500;

    return resp.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
}