import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        (increment) => {
            setCounter((value) => value + increment);
        },

        [],
    )

    // Evita bucles infinitos.
    useEffect(() => {
        // increment();
    }, [increment])
    

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>useCallBack Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </>
    )
}
