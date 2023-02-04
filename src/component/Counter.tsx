import { useState } from "react"
import style from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count => count + 1);
    }

    return (
        <div>
            <h1 className={style.count} >{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )



}
export default Counter