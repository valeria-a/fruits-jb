import { useState } from "react"

const Demo = () => {

    const [count, setCount] = useState(0)
    console.log('Rendering demo, count=', count)

    const handleClick = () => {
        console.log('Changing count from', count, 'to', count+1)
        // setCount(count + 1) //i ask react to update count to 1
        // setCount(count + 1) //i ask react to update count to 1
        setCount(prev => prev + 1) // i ask react to get the current value of count and to add 1 to it
        setCount(prev => prev + 1)
        console.log('The value of count after set is:', count)
    }

    return (
        <>
        <button onClick={handleClick}>increment 2</button>
        <p>{count}</p>

        <button onClick={() => setCount(0)}>RESET</button>

        </>
    )
}

export default Demo