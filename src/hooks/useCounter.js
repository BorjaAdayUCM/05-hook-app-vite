import { useState } from "react"

export const useCounter = (initialValue = 0, min = -Infinity, max = Infinity, valueIncrement = 1) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        if (counter === max) return;
        setCounter(counter + valueIncrement);
    }

    const decrement = () => {
        if (counter === min) return;
        setCounter(counter - valueIncrement);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}