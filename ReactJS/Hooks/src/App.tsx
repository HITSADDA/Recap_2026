import { useEffect } from "react"
import MyCounter from "./Components/MyCounter"
import { useWindowSize } from "./custom/useWindowSize"

function App() {

  // const {height, width} = useWindowSize()

  // useEffect(()=>{
  //   console.log(height)
  //   console.log(width)
  // }, [height, width])

  return (
    <>
      <MyCounter />
    </>
  )
}

export default App
