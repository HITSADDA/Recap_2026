import React, { useEffect, useState } from "react"
import { twFunc } from "./utils/tw"

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
}

function Button({ className, text }: ButtonType) {
  const [pending, setPending] = useState(false)
  return <button
    onClick={() => setPending(!pending)}
    className={
      twFunc("bg-blue-500 p-1 rounded-md cursor-pointer", className, {
        "bg-red-500": pending
      })
    }>{text}</button>
}

function App() {

  return (
    <>
      <section className="bg-slate-700 text-white w-full min-h-screen flex flex-col items-center justify-center space-y-4">
        <Button text="button 1" />
        <Button text="button 2"  className="bg-yellow-500"/>
        <Button text="button 3" className="bg-green-500"/>
      </section>
    </>
  )
}

export default App
