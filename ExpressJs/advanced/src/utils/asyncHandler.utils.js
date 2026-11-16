export default function asyncHandler(fn) {
    return async (req, resp, next) => {
        Promise.resolve(fn(req, resp, next)).catch(next)
    }
}