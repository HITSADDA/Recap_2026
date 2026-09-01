import { useReducer } from "react";

const initial_count: number = 0;

function reducer(state: number, action:{type: 'INCREMENT'| 'DEC'| 'RESET'}){
    switch (action.type) {
        case "INCREMENT":
            return state += 1;
            break;
        case "DEC":
            return state -= 1;
            break;
        case "RESET":
            return state = 0;
            break;
    
        default:
            return state
            break;
    }
}

const MyCounter = () => {
    const [count, dispatch] = useReducer(reducer, 0)
  return (
    <>
    <div>MyCounter: {count}</div>
    <button className="" onClick={()=>dispatch({type: "INCREMENT"})}>Count</button>
    </>
  )
}

export default MyCounter