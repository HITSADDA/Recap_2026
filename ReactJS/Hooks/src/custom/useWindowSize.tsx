import { useEffect, useState } from "react";

export function useWindowSize(): {
    height: number;
    width: any
} {
    const [size, setSize] = useState<{
        height: number;
        width: any
    }>({
        height: window.innerHeight || 0,
        width: window.innerWidth || 0
    })

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () =>{
            setSize({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return size
}