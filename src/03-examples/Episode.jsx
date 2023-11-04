import { useLayoutEffect, useRef, useState } from "react"

export const Episode = ({episode, name, air_date}) => {

    const pRef = useRef();
    const [boxSize, setboxSize] = useState({
        width: 0,
        high: 0
    })

    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect();
        setboxSize({
            width,
            height
        })
        console.log();

    }, [episode])

    return (
        <>
            <blockquote className="blockquote text-end" style={{display: 'flex'}}>
                <p ref={pRef} className="mb-1">{`${episode}. ${name}`}</p>
                <footer className="blockquote-footer mt-2">{air_date}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
        
    )
}
